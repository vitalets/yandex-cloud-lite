// source: yandex/cloud/compute/v1/instance_service.proto
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
var yandex_cloud_compute_v1_disk_pb = require('../../../../yandex/cloud/compute/v1/disk_pb.js');
goog.object.extend(proto, yandex_cloud_compute_v1_disk_pb);
var yandex_cloud_compute_v1_instance_pb = require('../../../../yandex/cloud/compute/v1/instance_pb.js');
goog.object.extend(proto, yandex_cloud_compute_v1_instance_pb);
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
goog.object.extend(proto, yandex_cloud_operation_operation_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachedDiskSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskCase', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.SourceCase', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachedDiskSpec.Mode', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachedFilesystemSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.Mode', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.CreateInstanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.CreateInstanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DeleteInstanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DeleteInstanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.DiskCase', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.FilesystemCase', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.DnsRecordSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.GetInstanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.InstanceView', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ListInstancesRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ListInstancesResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.MoveInstanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.MoveInstanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.NetworkInterfaceSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.OneToOneNatSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.PrimaryAddressSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ResourcesSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.RestartInstanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.RestartInstanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.StartInstanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.StartInstanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.StopInstanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.StopInstanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.UpdateInstanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.UpdateInstanceRequest', null, global);
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
proto.yandex.cloud.compute.v1.GetInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.GetInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.GetInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.GetInstanceRequest';
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
proto.yandex.cloud.compute.v1.ListInstancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ListInstancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ListInstancesRequest.displayName = 'proto.yandex.cloud.compute.v1.ListInstancesRequest';
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
proto.yandex.cloud.compute.v1.ListInstancesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.ListInstancesResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ListInstancesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ListInstancesResponse.displayName = 'proto.yandex.cloud.compute.v1.ListInstancesResponse';
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
proto.yandex.cloud.compute.v1.CreateInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.CreateInstanceRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.CreateInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.CreateInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.CreateInstanceRequest';
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
proto.yandex.cloud.compute.v1.CreateInstanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.CreateInstanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.CreateInstanceMetadata.displayName = 'proto.yandex.cloud.compute.v1.CreateInstanceMetadata';
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
proto.yandex.cloud.compute.v1.UpdateInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.UpdateInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.UpdateInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.UpdateInstanceRequest';
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.UpdateInstanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.displayName = 'proto.yandex.cloud.compute.v1.UpdateInstanceMetadata';
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
proto.yandex.cloud.compute.v1.DeleteInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.DeleteInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.DeleteInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.DeleteInstanceRequest';
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
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.DeleteInstanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.displayName = 'proto.yandex.cloud.compute.v1.DeleteInstanceMetadata';
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.displayName = 'proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest';
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.displayName = 'proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata';
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
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.displayName = 'proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest';
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
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.displayName = 'proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse';
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
proto.yandex.cloud.compute.v1.StopInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.StopInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.StopInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.StopInstanceRequest';
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
proto.yandex.cloud.compute.v1.StopInstanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.StopInstanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.StopInstanceMetadata.displayName = 'proto.yandex.cloud.compute.v1.StopInstanceMetadata';
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
proto.yandex.cloud.compute.v1.StartInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.StartInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.StartInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.StartInstanceRequest';
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
proto.yandex.cloud.compute.v1.StartInstanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.StartInstanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.StartInstanceMetadata.displayName = 'proto.yandex.cloud.compute.v1.StartInstanceMetadata';
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
proto.yandex.cloud.compute.v1.RestartInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.RestartInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.RestartInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.RestartInstanceRequest';
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
proto.yandex.cloud.compute.v1.RestartInstanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.RestartInstanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.RestartInstanceMetadata.displayName = 'proto.yandex.cloud.compute.v1.RestartInstanceMetadata';
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
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.displayName = 'proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest';
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
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.displayName = 'proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata';
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
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.displayName = 'proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest';
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
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.displayName = 'proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata';
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
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.displayName = 'proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest';
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
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.displayName = 'proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata';
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
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.displayName = 'proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest';
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
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.displayName = 'proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata';
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
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.displayName = 'proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest';
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
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.displayName = 'proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata';
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
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.displayName = 'proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest';
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
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.displayName = 'proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata';
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
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.displayName = 'proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest';
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
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.displayName = 'proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata';
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
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.displayName = 'proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest';
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
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.displayName = 'proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse';
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
proto.yandex.cloud.compute.v1.ResourcesSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ResourcesSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ResourcesSpec.displayName = 'proto.yandex.cloud.compute.v1.ResourcesSpec';
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
proto.yandex.cloud.compute.v1.AttachedDiskSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.AttachedDiskSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.AttachedDiskSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AttachedDiskSpec.displayName = 'proto.yandex.cloud.compute.v1.AttachedDiskSpec';
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
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.displayName = 'proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec';
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
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.AttachedFilesystemSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.displayName = 'proto.yandex.cloud.compute.v1.AttachedFilesystemSpec';
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
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.NetworkInterfaceSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.displayName = 'proto.yandex.cloud.compute.v1.NetworkInterfaceSpec';
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
proto.yandex.cloud.compute.v1.PrimaryAddressSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.PrimaryAddressSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.PrimaryAddressSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.PrimaryAddressSpec.displayName = 'proto.yandex.cloud.compute.v1.PrimaryAddressSpec';
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
proto.yandex.cloud.compute.v1.OneToOneNatSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.OneToOneNatSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.OneToOneNatSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.OneToOneNatSpec.displayName = 'proto.yandex.cloud.compute.v1.OneToOneNatSpec';
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
proto.yandex.cloud.compute.v1.DnsRecordSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.DnsRecordSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.DnsRecordSpec.displayName = 'proto.yandex.cloud.compute.v1.DnsRecordSpec';
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
proto.yandex.cloud.compute.v1.MoveInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.MoveInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.MoveInstanceRequest.displayName = 'proto.yandex.cloud.compute.v1.MoveInstanceRequest';
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
proto.yandex.cloud.compute.v1.MoveInstanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.MoveInstanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.MoveInstanceMetadata.displayName = 'proto.yandex.cloud.compute.v1.MoveInstanceMetadata';
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
proto.yandex.cloud.compute.v1.GetInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.GetInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    view: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceRequest}
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.GetInstanceRequest;
  return proto.yandex.cloud.compute.v1.GetInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceRequest}
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.compute.v1.InstanceView} */ (reader.readEnum());
      msg.setView(value);
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
proto.yandex.cloud.compute.v1.GetInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.GetInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional InstanceView view = 2;
 * @return {!proto.yandex.cloud.compute.v1.InstanceView}
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.prototype.getView = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.InstanceView} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.InstanceView} value
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.GetInstanceRequest.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ListInstancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ListInstancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesRequest}
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ListInstancesRequest;
  return proto.yandex.cloud.compute.v1.ListInstancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ListInstancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesRequest}
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ListInstancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ListInstancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListInstancesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ListInstancesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ListInstancesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    instancesList: jspb.Message.toObjectList(msg.getInstancesList(),
    yandex_cloud_compute_v1_instance_pb.Instance.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesResponse}
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ListInstancesResponse;
  return proto.yandex.cloud.compute.v1.ListInstancesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ListInstancesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesResponse}
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_compute_v1_instance_pb.Instance;
      reader.readMessage(value,yandex_cloud_compute_v1_instance_pb.Instance.deserializeBinaryFromReader);
      msg.addInstances(value);
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
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ListInstancesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ListInstancesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_compute_v1_instance_pb.Instance.serializeBinaryToWriter
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
 * repeated Instance instances = 1;
 * @return {!Array<!proto.yandex.cloud.compute.v1.Instance>}
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.getInstancesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.Instance>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_compute_v1_instance_pb.Instance, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.Instance>} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesResponse} returns this
*/
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.setInstancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.Instance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.Instance}
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.addInstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.compute.v1.Instance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesResponse} returns this
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.clearInstancesList = function() {
  return this.setInstancesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstancesResponse} returns this
 */
proto.yandex.cloud.compute.v1.ListInstancesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.repeatedFields_ = [10,17,11];



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
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.CreateInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    zoneId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    platformId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    resourcesSpec: (f = msg.getResourcesSpec()) && proto.yandex.cloud.compute.v1.ResourcesSpec.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    bootDiskSpec: (f = msg.getBootDiskSpec()) && proto.yandex.cloud.compute.v1.AttachedDiskSpec.toObject(includeInstance, f),
    secondaryDiskSpecsList: jspb.Message.toObjectList(msg.getSecondaryDiskSpecsList(),
    proto.yandex.cloud.compute.v1.AttachedDiskSpec.toObject, includeInstance),
    filesystemSpecsList: jspb.Message.toObjectList(msg.getFilesystemSpecsList(),
    proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.toObject, includeInstance),
    networkInterfaceSpecsList: jspb.Message.toObjectList(msg.getNetworkInterfaceSpecsList(),
    proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.toObject, includeInstance),
    hostname: jspb.Message.getFieldWithDefault(msg, 12, ""),
    schedulingPolicy: (f = msg.getSchedulingPolicy()) && yandex_cloud_compute_v1_instance_pb.SchedulingPolicy.toObject(includeInstance, f),
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    networkSettings: (f = msg.getNetworkSettings()) && yandex_cloud_compute_v1_instance_pb.NetworkSettings.toObject(includeInstance, f),
    placementPolicy: (f = msg.getPlacementPolicy()) && yandex_cloud_compute_v1_instance_pb.PlacementPolicy.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.CreateInstanceRequest;
  return proto.yandex.cloud.compute.v1.CreateInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setZoneId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformId(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.compute.v1.ResourcesSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.ResourcesSpec.deserializeBinaryFromReader);
      msg.setResourcesSpec(value);
      break;
    case 8:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 9:
      var value = new proto.yandex.cloud.compute.v1.AttachedDiskSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.AttachedDiskSpec.deserializeBinaryFromReader);
      msg.setBootDiskSpec(value);
      break;
    case 10:
      var value = new proto.yandex.cloud.compute.v1.AttachedDiskSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.AttachedDiskSpec.deserializeBinaryFromReader);
      msg.addSecondaryDiskSpecs(value);
      break;
    case 17:
      var value = new proto.yandex.cloud.compute.v1.AttachedFilesystemSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.deserializeBinaryFromReader);
      msg.addFilesystemSpecs(value);
      break;
    case 11:
      var value = new proto.yandex.cloud.compute.v1.NetworkInterfaceSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.deserializeBinaryFromReader);
      msg.addNetworkInterfaceSpecs(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 13:
      var value = new yandex_cloud_compute_v1_instance_pb.SchedulingPolicy;
      reader.readMessage(value,yandex_cloud_compute_v1_instance_pb.SchedulingPolicy.deserializeBinaryFromReader);
      msg.setSchedulingPolicy(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 15:
      var value = new yandex_cloud_compute_v1_instance_pb.NetworkSettings;
      reader.readMessage(value,yandex_cloud_compute_v1_instance_pb.NetworkSettings.deserializeBinaryFromReader);
      msg.setNetworkSettings(value);
      break;
    case 16:
      var value = new yandex_cloud_compute_v1_instance_pb.PlacementPolicy;
      reader.readMessage(value,yandex_cloud_compute_v1_instance_pb.PlacementPolicy.deserializeBinaryFromReader);
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
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.CreateInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPlatformId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResourcesSpec();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yandex.cloud.compute.v1.ResourcesSpec.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getBootDiskSpec();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.compute.v1.AttachedDiskSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryDiskSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.yandex.cloud.compute.v1.AttachedDiskSpec.serializeBinaryToWriter
    );
  }
  f = message.getFilesystemSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.serializeBinaryToWriter
    );
  }
  f = message.getNetworkInterfaceSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSchedulingPolicy();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      yandex_cloud_compute_v1_instance_pb.SchedulingPolicy.serializeBinaryToWriter
    );
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getNetworkSettings();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      yandex_cloud_compute_v1_instance_pb.NetworkSettings.serializeBinaryToWriter
    );
  }
  f = message.getPlacementPolicy();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      yandex_cloud_compute_v1_instance_pb.PlacementPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string zone_id = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string platform_id = 6;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getPlatformId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setPlatformId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ResourcesSpec resources_spec = 7;
 * @return {?proto.yandex.cloud.compute.v1.ResourcesSpec}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getResourcesSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.ResourcesSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.ResourcesSpec, 7));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.ResourcesSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setResourcesSpec = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearResourcesSpec = function() {
  return this.setResourcesSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.hasResourcesSpec = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, string> metadata = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * optional AttachedDiskSpec boot_disk_spec = 9;
 * @return {?proto.yandex.cloud.compute.v1.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getBootDiskSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.AttachedDiskSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.AttachedDiskSpec, 9));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.AttachedDiskSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setBootDiskSpec = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearBootDiskSpec = function() {
  return this.setBootDiskSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.hasBootDiskSpec = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated AttachedDiskSpec secondary_disk_specs = 10;
 * @return {!Array<!proto.yandex.cloud.compute.v1.AttachedDiskSpec>}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getSecondaryDiskSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.AttachedDiskSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.AttachedDiskSpec, 10));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.AttachedDiskSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setSecondaryDiskSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.addSecondaryDiskSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.yandex.cloud.compute.v1.AttachedDiskSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearSecondaryDiskSpecsList = function() {
  return this.setSecondaryDiskSpecsList([]);
};


/**
 * repeated AttachedFilesystemSpec filesystem_specs = 17;
 * @return {!Array<!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec>}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getFilesystemSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.AttachedFilesystemSpec, 17));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setFilesystemSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.addFilesystemSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.yandex.cloud.compute.v1.AttachedFilesystemSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearFilesystemSpecsList = function() {
  return this.setFilesystemSpecsList([]);
};


/**
 * repeated NetworkInterfaceSpec network_interface_specs = 11;
 * @return {!Array<!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec>}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getNetworkInterfaceSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.NetworkInterfaceSpec, 11));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setNetworkInterfaceSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.addNetworkInterfaceSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.yandex.cloud.compute.v1.NetworkInterfaceSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearNetworkInterfaceSpecsList = function() {
  return this.setNetworkInterfaceSpecsList([]);
};


/**
 * optional string hostname = 12;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional SchedulingPolicy scheduling_policy = 13;
 * @return {?proto.yandex.cloud.compute.v1.SchedulingPolicy}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getSchedulingPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.SchedulingPolicy} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_compute_v1_instance_pb.SchedulingPolicy, 13));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.SchedulingPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setSchedulingPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearSchedulingPolicy = function() {
  return this.setSchedulingPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.hasSchedulingPolicy = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string service_account_id = 14;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional NetworkSettings network_settings = 15;
 * @return {?proto.yandex.cloud.compute.v1.NetworkSettings}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getNetworkSettings = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.NetworkSettings} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_compute_v1_instance_pb.NetworkSettings, 15));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.NetworkSettings|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setNetworkSettings = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearNetworkSettings = function() {
  return this.setNetworkSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.hasNetworkSettings = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PlacementPolicy placement_policy = 16;
 * @return {?proto.yandex.cloud.compute.v1.PlacementPolicy}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.getPlacementPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.PlacementPolicy} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_compute_v1_instance_pb.PlacementPolicy, 16));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.PlacementPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.setPlacementPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.clearPlacementPolicy = function() {
  return this.setPlacementPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.CreateInstanceRequest.prototype.hasPlacementPolicy = function() {
  return jspb.Message.getField(this, 16) != null;
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
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.CreateInstanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.CreateInstanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.CreateInstanceMetadata;
  return proto.yandex.cloud.compute.v1.CreateInstanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.CreateInstanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.CreateInstanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.CreateInstanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.CreateInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.CreateInstanceMetadata.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.UpdateInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    platformId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    resourcesSpec: (f = msg.getResourcesSpec()) && proto.yandex.cloud.compute.v1.ResourcesSpec.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    networkSettings: (f = msg.getNetworkSettings()) && yandex_cloud_compute_v1_instance_pb.NetworkSettings.toObject(includeInstance, f),
    placementPolicy: (f = msg.getPlacementPolicy()) && yandex_cloud_compute_v1_instance_pb.PlacementPolicy.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.UpdateInstanceRequest;
  return proto.yandex.cloud.compute.v1.UpdateInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformId(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.compute.v1.ResourcesSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.ResourcesSpec.deserializeBinaryFromReader);
      msg.setResourcesSpec(value);
      break;
    case 8:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 10:
      var value = new yandex_cloud_compute_v1_instance_pb.NetworkSettings;
      reader.readMessage(value,yandex_cloud_compute_v1_instance_pb.NetworkSettings.deserializeBinaryFromReader);
      msg.setNetworkSettings(value);
      break;
    case 11:
      var value = new yandex_cloud_compute_v1_instance_pb.PlacementPolicy;
      reader.readMessage(value,yandex_cloud_compute_v1_instance_pb.PlacementPolicy.deserializeBinaryFromReader);
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
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.UpdateInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
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
  f = message.getPlatformId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResourcesSpec();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yandex.cloud.compute.v1.ResourcesSpec.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNetworkSettings();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      yandex_cloud_compute_v1_instance_pb.NetworkSettings.serializeBinaryToWriter
    );
  }
  f = message.getPlacementPolicy();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      yandex_cloud_compute_v1_instance_pb.PlacementPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string platform_id = 6;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getPlatformId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setPlatformId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ResourcesSpec resources_spec = 7;
 * @return {?proto.yandex.cloud.compute.v1.ResourcesSpec}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getResourcesSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.ResourcesSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.ResourcesSpec, 7));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.ResourcesSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setResourcesSpec = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.clearResourcesSpec = function() {
  return this.setResourcesSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.hasResourcesSpec = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, string> metadata = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * optional string service_account_id = 9;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional NetworkSettings network_settings = 10;
 * @return {?proto.yandex.cloud.compute.v1.NetworkSettings}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getNetworkSettings = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.NetworkSettings} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_compute_v1_instance_pb.NetworkSettings, 10));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.NetworkSettings|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setNetworkSettings = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.clearNetworkSettings = function() {
  return this.setNetworkSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.hasNetworkSettings = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PlacementPolicy placement_policy = 11;
 * @return {?proto.yandex.cloud.compute.v1.PlacementPolicy}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.getPlacementPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.PlacementPolicy} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_compute_v1_instance_pb.PlacementPolicy, 11));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.PlacementPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
*/
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.setPlacementPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.clearPlacementPolicy = function() {
  return this.setPlacementPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceRequest.prototype.hasPlacementPolicy = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.UpdateInstanceMetadata;
  return proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadata.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.DeleteInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.DeleteInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.DeleteInstanceRequest}
 */
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.DeleteInstanceRequest;
  return proto.yandex.cloud.compute.v1.DeleteInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.DeleteInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.DeleteInstanceRequest}
 */
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.DeleteInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.DeleteInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DeleteInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.DeleteInstanceRequest.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.DeleteInstanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.DeleteInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.DeleteInstanceMetadata;
  return proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.DeleteInstanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.DeleteInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.DeleteInstanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DeleteInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.DeleteInstanceMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deleteList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    upsertMap: (f = msg.getUpsertMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest;
  return proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDelete(value);
      break;
    case 3:
      var value = msg.getUpsertMap();
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeleteList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getUpsertMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string delete = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.getDeleteList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.setDeleteList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.addDelete = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.clearDeleteList = function() {
  return this.setDeleteList([]);
};


/**
 * map<string, string> upsert = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.getUpsertMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.prototype.clearUpsertMap = function() {
  this.getUpsertMap().clear();
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata;
  return proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest}
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest;
  return proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest}
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
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
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest} returns this
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 port = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest} returns this
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contents: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse}
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse;
  return proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse}
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContents(value);
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
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContents();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string contents = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.prototype.getContents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse} returns this
 */
proto.yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse.prototype.setContents = function(value) {
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
proto.yandex.cloud.compute.v1.StopInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.StopInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.StopInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StopInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.StopInstanceRequest}
 */
proto.yandex.cloud.compute.v1.StopInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.StopInstanceRequest;
  return proto.yandex.cloud.compute.v1.StopInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.StopInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.StopInstanceRequest}
 */
proto.yandex.cloud.compute.v1.StopInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.StopInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.StopInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.StopInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StopInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.StopInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.StopInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.StopInstanceRequest.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.StopInstanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.StopInstanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.StopInstanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StopInstanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.StopInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.StopInstanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.StopInstanceMetadata;
  return proto.yandex.cloud.compute.v1.StopInstanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.StopInstanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.StopInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.StopInstanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.StopInstanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.StopInstanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.StopInstanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StopInstanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.StopInstanceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.StopInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.StopInstanceMetadata.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.StartInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.StartInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.StartInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StartInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.StartInstanceRequest}
 */
proto.yandex.cloud.compute.v1.StartInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.StartInstanceRequest;
  return proto.yandex.cloud.compute.v1.StartInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.StartInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.StartInstanceRequest}
 */
proto.yandex.cloud.compute.v1.StartInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.StartInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.StartInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.StartInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StartInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.StartInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.StartInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.StartInstanceRequest.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.StartInstanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.StartInstanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.StartInstanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StartInstanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.StartInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.StartInstanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.StartInstanceMetadata;
  return proto.yandex.cloud.compute.v1.StartInstanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.StartInstanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.StartInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.StartInstanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.StartInstanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.StartInstanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.StartInstanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.StartInstanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.StartInstanceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.StartInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.StartInstanceMetadata.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.RestartInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.RestartInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.RestartInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RestartInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.RestartInstanceRequest}
 */
proto.yandex.cloud.compute.v1.RestartInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.RestartInstanceRequest;
  return proto.yandex.cloud.compute.v1.RestartInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.RestartInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.RestartInstanceRequest}
 */
proto.yandex.cloud.compute.v1.RestartInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.RestartInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.RestartInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.RestartInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RestartInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.RestartInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.RestartInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.RestartInstanceRequest.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.RestartInstanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.RestartInstanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.RestartInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.RestartInstanceMetadata;
  return proto.yandex.cloud.compute.v1.RestartInstanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.RestartInstanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.RestartInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.RestartInstanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.RestartInstanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.RestartInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.RestartInstanceMetadata.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attachedDiskSpec: (f = msg.getAttachedDiskSpec()) && proto.yandex.cloud.compute.v1.AttachedDiskSpec.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest;
  return proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.compute.v1.AttachedDiskSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.AttachedDiskSpec.deserializeBinaryFromReader);
      msg.setAttachedDiskSpec(value);
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
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttachedDiskSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.AttachedDiskSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AttachedDiskSpec attached_disk_spec = 2;
 * @return {?proto.yandex.cloud.compute.v1.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.getAttachedDiskSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.AttachedDiskSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.AttachedDiskSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.AttachedDiskSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest} returns this
*/
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.setAttachedDiskSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.clearAttachedDiskSpec = function() {
  return this.setAttachedDiskSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskRequest.prototype.hasAttachedDiskSpec = function() {
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
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    diskId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata;
  return proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
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
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDiskId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string disk_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.prototype.getDiskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceDiskMetadata.prototype.setDiskId = function(value) {
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
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.DiskCase = {
  DISK_NOT_SET: 0,
  DISK_ID: 2,
  DEVICE_NAME: 3
};

/**
 * @return {proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.DiskCase}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.getDiskCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.DiskCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    diskId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest;
  return proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiskId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
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
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string disk_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.getDiskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.setDiskId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.clearDiskId = function() {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.hasDiskId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string device_name = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.setDeviceName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.clearDeviceName = function() {
  return jspb.Message.setOneofField(this, 3, proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskRequest.prototype.hasDeviceName = function() {
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
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    diskId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata;
  return proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
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
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDiskId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string disk_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.prototype.getDiskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceDiskMetadata.prototype.setDiskId = function(value) {
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
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attachedFilesystemSpec: (f = msg.getAttachedFilesystemSpec()) && proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest;
  return proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.compute.v1.AttachedFilesystemSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.deserializeBinaryFromReader);
      msg.setAttachedFilesystemSpec(value);
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
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttachedFilesystemSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AttachedFilesystemSpec attached_filesystem_spec = 2;
 * @return {?proto.yandex.cloud.compute.v1.AttachedFilesystemSpec}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.getAttachedFilesystemSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.AttachedFilesystemSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.AttachedFilesystemSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.AttachedFilesystemSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest} returns this
*/
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.setAttachedFilesystemSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.clearAttachedFilesystemSpec = function() {
  return this.setAttachedFilesystemSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemRequest.prototype.hasAttachedFilesystemSpec = function() {
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
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filesystemId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata;
  return proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesystemId(value);
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
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilesystemId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filesystem_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.prototype.getFilesystemId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata} returns this
 */
proto.yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata.prototype.setFilesystemId = function(value) {
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
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.FilesystemCase = {
  FILESYSTEM_NOT_SET: 0,
  FILESYSTEM_ID: 2,
  DEVICE_NAME: 3
};

/**
 * @return {proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.FilesystemCase}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.getFilesystemCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.FilesystemCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filesystemId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest;
  return proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesystemId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
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
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filesystem_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.getFilesystemId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.setFilesystemId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.clearFilesystemId = function() {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.hasFilesystemId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string device_name = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.setDeviceName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.clearDeviceName = function() {
  return jspb.Message.setOneofField(this, 3, proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemRequest.prototype.hasDeviceName = function() {
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
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filesystemId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata;
  return proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesystemId(value);
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
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilesystemId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filesystem_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.prototype.getFilesystemId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata} returns this
 */
proto.yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata.prototype.setFilesystemId = function(value) {
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
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    networkInterfaceIndex: jspb.Message.getFieldWithDefault(msg, 2, ""),
    internalAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    oneToOneNatSpec: (f = msg.getOneToOneNatSpec()) && proto.yandex.cloud.compute.v1.OneToOneNatSpec.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest;
  return proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkInterfaceIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalAddress(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.compute.v1.OneToOneNatSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.OneToOneNatSpec.deserializeBinaryFromReader);
      msg.setOneToOneNatSpec(value);
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
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetworkInterfaceIndex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInternalAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOneToOneNatSpec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.compute.v1.OneToOneNatSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} returns this
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string network_interface_index = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.getNetworkInterfaceIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} returns this
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.setNetworkInterfaceIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string internal_address = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.getInternalAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} returns this
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.setInternalAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OneToOneNatSpec one_to_one_nat_spec = 4;
 * @return {?proto.yandex.cloud.compute.v1.OneToOneNatSpec}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.getOneToOneNatSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.OneToOneNatSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.OneToOneNatSpec, 4));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.OneToOneNatSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} returns this
*/
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.setOneToOneNatSpec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest} returns this
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.clearOneToOneNatSpec = function() {
  return this.setOneToOneNatSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest.prototype.hasOneToOneNatSpec = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata;
  return proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata} returns this
 */
proto.yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata.prototype.setInstanceId = function(value) {
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
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    networkInterfaceIndex: jspb.Message.getFieldWithDefault(msg, 2, ""),
    internalAddress: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest;
  return proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkInterfaceIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalAddress(value);
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
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetworkInterfaceIndex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInternalAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest} returns this
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string network_interface_index = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.getNetworkInterfaceIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest} returns this
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.setNetworkInterfaceIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string internal_address = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.getInternalAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest} returns this
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest.prototype.setInternalAddress = function(value) {
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
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata;
  return proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata} returns this
 */
proto.yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.repeatedFields_ = [7];



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
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    networkInterfaceIndex: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    subnetId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    primaryV4AddressSpec: (f = msg.getPrimaryV4AddressSpec()) && proto.yandex.cloud.compute.v1.PrimaryAddressSpec.toObject(includeInstance, f),
    primaryV6AddressSpec: (f = msg.getPrimaryV6AddressSpec()) && proto.yandex.cloud.compute.v1.PrimaryAddressSpec.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest;
  return proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkInterfaceIndex(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
      break;
    case 5:
      var value = new proto.yandex.cloud.compute.v1.PrimaryAddressSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.PrimaryAddressSpec.deserializeBinaryFromReader);
      msg.setPrimaryV4AddressSpec(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.compute.v1.PrimaryAddressSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.PrimaryAddressSpec.deserializeBinaryFromReader);
      msg.setPrimaryV6AddressSpec(value);
      break;
    case 7:
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
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetworkInterfaceIndex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrimaryV4AddressSpec();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yandex.cloud.compute.v1.PrimaryAddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getPrimaryV6AddressSpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.compute.v1.PrimaryAddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string network_interface_index = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.getNetworkInterfaceIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.setNetworkInterfaceIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
*/
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string subnet_id = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional PrimaryAddressSpec primary_v4_address_spec = 5;
 * @return {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.getPrimaryV4AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.PrimaryAddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.PrimaryAddressSpec, 5));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
*/
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.setPrimaryV4AddressSpec = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.clearPrimaryV4AddressSpec = function() {
  return this.setPrimaryV4AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.hasPrimaryV4AddressSpec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PrimaryAddressSpec primary_v6_address_spec = 6;
 * @return {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.getPrimaryV6AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.PrimaryAddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.PrimaryAddressSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
*/
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.setPrimaryV6AddressSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.clearPrimaryV6AddressSpec = function() {
  return this.setPrimaryV6AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.hasPrimaryV6AddressSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string security_group_ids = 7;
 * @return {!Array<string>}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest.prototype.clearSecurityGroupIdsList = function() {
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
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    networkInterfaceIndex: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata;
  return proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkInterfaceIndex(value);
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
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetworkInterfaceIndex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string network_interface_index = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.prototype.getNetworkInterfaceIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata.prototype.setNetworkInterfaceIndex = function(value) {
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
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest;
  return proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
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
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
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
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse;
  return proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.operation.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_operation_operation_pb.Operation, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.operation.Operation>} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse} returns this
*/
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.operation.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.operation.Operation}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.operation.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse} returns this
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse} returns this
 */
proto.yandex.cloud.compute.v1.ListInstanceOperationsResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ResourcesSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ResourcesSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.compute.v1.ResourcesSpec}
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ResourcesSpec;
  return proto.yandex.cloud.compute.v1.ResourcesSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ResourcesSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ResourcesSpec}
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ResourcesSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ResourcesSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.getMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.setMemory = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 cores = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.getCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.setCores = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 core_fraction = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.getCoreFraction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.setCoreFraction = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 gpus = 4;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.getGpus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.ResourcesSpec.prototype.setGpus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskCase = {
  DISK_NOT_SET: 0,
  DISK_SPEC: 4,
  DISK_ID: 5
};

/**
 * @return {proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskCase}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.getDiskCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.AttachedDiskSpec.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AttachedDiskSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    autoDelete: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    diskSpec: (f = msg.getDiskSpec()) && proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.toObject(includeInstance, f),
    diskId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AttachedDiskSpec;
  return proto.yandex.cloud.compute.v1.AttachedDiskSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoDelete(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.deserializeBinaryFromReader);
      msg.setDiskSpec(value);
      break;
    case 5:
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
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AttachedDiskSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAutoDelete();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDiskSpec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.Mode = {
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
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.SourceCase = {
  SOURCE_NOT_SET: 0,
  IMAGE_ID: 5,
  SNAPSHOT_ID: 6
};

/**
 * @return {proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.SourceCase}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getSourceCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.SourceCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    typeId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    blockSize: jspb.Message.getFieldWithDefault(msg, 8, 0),
    diskPlacementPolicy: (f = msg.getDiskPlacementPolicy()) && yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy.toObject(includeInstance, f),
    imageId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    snapshotId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec;
  return proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockSize(value);
      break;
    case 7:
      var value = new yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy;
      reader.readMessage(value,yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy.deserializeBinaryFromReader);
      msg.setDiskPlacementPolicy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotId(value);
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
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTypeId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getBlockSize();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getDiskPlacementPolicy();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type_id = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 block_size = 8;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getBlockSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setBlockSize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional DiskPlacementPolicy disk_placement_policy = 7;
 * @return {?proto.yandex.cloud.compute.v1.DiskPlacementPolicy}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getDiskPlacementPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.DiskPlacementPolicy} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy, 7));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.DiskPlacementPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
*/
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setDiskPlacementPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.clearDiskPlacementPolicy = function() {
  return this.setDiskPlacementPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.hasDiskPlacementPolicy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string image_id = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setImageId = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.clearImageId = function() {
  return jspb.Message.setOneofField(this, 5, proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.hasImageId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string snapshot_id = 6;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.getSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.setSnapshotId = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.clearSnapshotId = function() {
  return jspb.Message.setOneofField(this, 6, proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec.prototype.hasSnapshotId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Mode mode = 1;
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.Mode}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.getMode = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.AttachedDiskSpec.Mode} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string device_name = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.setDeviceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool auto_delete = 3;
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.getAutoDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.setAutoDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional DiskSpec disk_spec = 4;
 * @return {?proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.getDiskSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec, 4));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} returns this
*/
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.setDiskSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yandex.cloud.compute.v1.AttachedDiskSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.clearDiskSpec = function() {
  return this.setDiskSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.hasDiskSpec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string disk_id = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.getDiskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.setDiskId = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.yandex.cloud.compute.v1.AttachedDiskSpec.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.clearDiskId = function() {
  return jspb.Message.setOneofField(this, 5, proto.yandex.cloud.compute.v1.AttachedDiskSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.AttachedDiskSpec.prototype.hasDiskId = function() {
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
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filesystemId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec}
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.AttachedFilesystemSpec;
  return proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec}
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesystemId(value);
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
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getFilesystemId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.Mode = {
  MODE_UNSPECIFIED: 0,
  READ_ONLY: 1,
  READ_WRITE: 2
};

/**
 * optional Mode mode = 1;
 * @return {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.Mode}
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.getMode = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.Mode} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string device_name = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.setDeviceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filesystem_id = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.getFilesystemId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.AttachedFilesystemSpec} returns this
 */
proto.yandex.cloud.compute.v1.AttachedFilesystemSpec.prototype.setFilesystemId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.repeatedFields_ = [6];



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
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    subnetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primaryV4AddressSpec: (f = msg.getPrimaryV4AddressSpec()) && proto.yandex.cloud.compute.v1.PrimaryAddressSpec.toObject(includeInstance, f),
    primaryV6AddressSpec: (f = msg.getPrimaryV6AddressSpec()) && proto.yandex.cloud.compute.v1.PrimaryAddressSpec.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.NetworkInterfaceSpec;
  return proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.compute.v1.PrimaryAddressSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.PrimaryAddressSpec.deserializeBinaryFromReader);
      msg.setPrimaryV4AddressSpec(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.PrimaryAddressSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.PrimaryAddressSpec.deserializeBinaryFromReader);
      msg.setPrimaryV6AddressSpec(value);
      break;
    case 6:
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
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrimaryV4AddressSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.PrimaryAddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getPrimaryV6AddressSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.PrimaryAddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string subnet_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PrimaryAddressSpec primary_v4_address_spec = 2;
 * @return {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.getPrimaryV4AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.PrimaryAddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.PrimaryAddressSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
*/
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.setPrimaryV4AddressSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.clearPrimaryV4AddressSpec = function() {
  return this.setPrimaryV4AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.hasPrimaryV4AddressSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PrimaryAddressSpec primary_v6_address_spec = 3;
 * @return {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.getPrimaryV6AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.PrimaryAddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.PrimaryAddressSpec, 3));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.PrimaryAddressSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
*/
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.setPrimaryV6AddressSpec = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.clearPrimaryV6AddressSpec = function() {
  return this.setPrimaryV6AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.hasPrimaryV6AddressSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string security_group_ids = 6;
 * @return {!Array<string>}
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.NetworkInterfaceSpec.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.repeatedFields_ = [3];



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
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.PrimaryAddressSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oneToOneNatSpec: (f = msg.getOneToOneNatSpec()) && proto.yandex.cloud.compute.v1.OneToOneNatSpec.toObject(includeInstance, f),
    dnsRecordSpecsList: jspb.Message.toObjectList(msg.getDnsRecordSpecsList(),
    proto.yandex.cloud.compute.v1.DnsRecordSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.PrimaryAddressSpec;
  return proto.yandex.cloud.compute.v1.PrimaryAddressSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.compute.v1.OneToOneNatSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.OneToOneNatSpec.deserializeBinaryFromReader);
      msg.setOneToOneNatSpec(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.DnsRecordSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.DnsRecordSpec.deserializeBinaryFromReader);
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
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.PrimaryAddressSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOneToOneNatSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.OneToOneNatSpec.serializeBinaryToWriter
    );
  }
  f = message.getDnsRecordSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.DnsRecordSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} returns this
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OneToOneNatSpec one_to_one_nat_spec = 2;
 * @return {?proto.yandex.cloud.compute.v1.OneToOneNatSpec}
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.getOneToOneNatSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.OneToOneNatSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.OneToOneNatSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.OneToOneNatSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} returns this
*/
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.setOneToOneNatSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} returns this
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.clearOneToOneNatSpec = function() {
  return this.setOneToOneNatSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.hasOneToOneNatSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DnsRecordSpec dns_record_specs = 3;
 * @return {!Array<!proto.yandex.cloud.compute.v1.DnsRecordSpec>}
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.getDnsRecordSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.DnsRecordSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.DnsRecordSpec, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.DnsRecordSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} returns this
*/
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.setDnsRecordSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.DnsRecordSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.addDnsRecordSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.compute.v1.DnsRecordSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.PrimaryAddressSpec} returns this
 */
proto.yandex.cloud.compute.v1.PrimaryAddressSpec.prototype.clearDnsRecordSpecsList = function() {
  return this.setDnsRecordSpecsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.repeatedFields_ = [3];



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
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.OneToOneNatSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.OneToOneNatSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipVersion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dnsRecordSpecsList: jspb.Message.toObjectList(msg.getDnsRecordSpecsList(),
    proto.yandex.cloud.compute.v1.DnsRecordSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.compute.v1.OneToOneNatSpec}
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.OneToOneNatSpec;
  return proto.yandex.cloud.compute.v1.OneToOneNatSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.OneToOneNatSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.OneToOneNatSpec}
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.compute.v1.IpVersion} */ (reader.readEnum());
      msg.setIpVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.DnsRecordSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.DnsRecordSpec.deserializeBinaryFromReader);
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
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.OneToOneNatSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.OneToOneNatSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.compute.v1.DnsRecordSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional IpVersion ip_version = 1;
 * @return {!proto.yandex.cloud.compute.v1.IpVersion}
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.getIpVersion = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.IpVersion} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.IpVersion} value
 * @return {!proto.yandex.cloud.compute.v1.OneToOneNatSpec} returns this
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.setIpVersion = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.OneToOneNatSpec} returns this
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated DnsRecordSpec dns_record_specs = 3;
 * @return {!Array<!proto.yandex.cloud.compute.v1.DnsRecordSpec>}
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.getDnsRecordSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.DnsRecordSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.DnsRecordSpec, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.DnsRecordSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.OneToOneNatSpec} returns this
*/
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.setDnsRecordSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.DnsRecordSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.addDnsRecordSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.compute.v1.DnsRecordSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.OneToOneNatSpec} returns this
 */
proto.yandex.cloud.compute.v1.OneToOneNatSpec.prototype.clearDnsRecordSpecsList = function() {
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
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.DnsRecordSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.DnsRecordSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.DnsRecordSpec;
  return proto.yandex.cloud.compute.v1.DnsRecordSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.DnsRecordSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.DnsRecordSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.DnsRecordSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.getFqdn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.setFqdn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_zone_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.getDnsZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.setDnsZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ttl = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool ptr = 4;
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.getPtr = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.compute.v1.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.DnsRecordSpec.prototype.setPtr = function(value) {
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
proto.yandex.cloud.compute.v1.MoveInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.MoveInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.MoveInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destinationFolderId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceRequest}
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.MoveInstanceRequest;
  return proto.yandex.cloud.compute.v1.MoveInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.MoveInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceRequest}
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationFolderId(value);
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
proto.yandex.cloud.compute.v1.MoveInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.MoveInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.MoveInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestinationFolderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceRequest} returns this
 */
proto.yandex.cloud.compute.v1.MoveInstanceRequest.prototype.setDestinationFolderId = function(value) {
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
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.MoveInstanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceFolderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationFolderId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.MoveInstanceMetadata;
  return proto.yandex.cloud.compute.v1.MoveInstanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata}
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceFolderId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationFolderId(value);
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
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.MoveInstanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceFolderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationFolderId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.getSourceFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.setSourceFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_folder_id = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.MoveInstanceMetadata} returns this
 */
proto.yandex.cloud.compute.v1.MoveInstanceMetadata.prototype.setDestinationFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.InstanceView = {
  BASIC: 0,
  FULL: 1
};

goog.object.extend(exports, proto.yandex.cloud.compute.v1);
