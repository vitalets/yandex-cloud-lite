// source: yandex/cloud/dataproc/v1/subcluster.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var yandex_cloud_dataproc_v1_common_pb = require('../../../../yandex/cloud/dataproc/v1/common_pb.js');
goog.object.extend(proto, yandex_cloud_dataproc_v1_common_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.yandex.cloud.dataproc.v1.AutoscalingConfig', null, global);
goog.exportSymbol('proto.yandex.cloud.dataproc.v1.Host', null, global);
goog.exportSymbol('proto.yandex.cloud.dataproc.v1.Role', null, global);
goog.exportSymbol('proto.yandex.cloud.dataproc.v1.Subcluster', null, global);
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
proto.yandex.cloud.dataproc.v1.AutoscalingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.dataproc.v1.AutoscalingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.dataproc.v1.AutoscalingConfig.displayName = 'proto.yandex.cloud.dataproc.v1.AutoscalingConfig';
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
proto.yandex.cloud.dataproc.v1.Subcluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.dataproc.v1.Subcluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.dataproc.v1.Subcluster.displayName = 'proto.yandex.cloud.dataproc.v1.Subcluster';
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
proto.yandex.cloud.dataproc.v1.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.dataproc.v1.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.dataproc.v1.Host.displayName = 'proto.yandex.cloud.dataproc.v1.Host';
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
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.dataproc.v1.AutoscalingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxHostsCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    preemptible: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    measurementDuration: (f = msg.getMeasurementDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    warmupDuration: (f = msg.getWarmupDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    stabilizationDuration: (f = msg.getStabilizationDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    cpuUtilizationTarget: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    decommissionTimeout: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.dataproc.v1.AutoscalingConfig;
  return proto.yandex.cloud.dataproc.v1.AutoscalingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxHostsCount(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreemptible(value);
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
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpuUtilizationTarget(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDecommissionTimeout(value);
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
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.dataproc.v1.AutoscalingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxHostsCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPreemptible();
  if (f) {
    writer.writeBool(
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
  f = message.getCpuUtilizationTarget();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getDecommissionTimeout();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional int64 max_hosts_count = 1;
 * @return {number}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.getMaxHostsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.setMaxHostsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool preemptible = 2;
 * @return {boolean}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.getPreemptible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.setPreemptible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.Duration measurement_duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.getMeasurementDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
*/
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.setMeasurementDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.clearMeasurementDuration = function() {
  return this.setMeasurementDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.hasMeasurementDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration warmup_duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.getWarmupDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
*/
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.setWarmupDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.clearWarmupDuration = function() {
  return this.setWarmupDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.hasWarmupDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration stabilization_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.getStabilizationDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
*/
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.setStabilizationDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.clearStabilizationDuration = function() {
  return this.setStabilizationDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.hasStabilizationDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double cpu_utilization_target = 6;
 * @return {number}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.getCpuUtilizationTarget = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.setCpuUtilizationTarget = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int64 decommission_timeout = 7;
 * @return {number}
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.getDecommissionTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.dataproc.v1.AutoscalingConfig} returns this
 */
proto.yandex.cloud.dataproc.v1.AutoscalingConfig.prototype.setDecommissionTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.dataproc.v1.Subcluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.dataproc.v1.Subcluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dataproc.v1.Subcluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    role: jspb.Message.getFieldWithDefault(msg, 5, 0),
    resources: (f = msg.getResources()) && yandex_cloud_dataproc_v1_common_pb.Resources.toObject(includeInstance, f),
    subnetId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    hostsCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    autoscalingConfig: (f = msg.getAutoscalingConfig()) && proto.yandex.cloud.dataproc.v1.AutoscalingConfig.toObject(includeInstance, f),
    instanceGroupId: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.dataproc.v1.Subcluster;
  return proto.yandex.cloud.dataproc.v1.Subcluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.dataproc.v1.Subcluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setClusterId(value);
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
      var value = /** @type {!proto.yandex.cloud.dataproc.v1.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 6:
      var value = new yandex_cloud_dataproc_v1_common_pb.Resources;
      reader.readMessage(value,yandex_cloud_dataproc_v1_common_pb.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHostsCount(value);
      break;
    case 10:
      var value = new proto.yandex.cloud.dataproc.v1.AutoscalingConfig;
      reader.readMessage(value,proto.yandex.cloud.dataproc.v1.AutoscalingConfig.deserializeBinaryFromReader);
      msg.setAutoscalingConfig(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceGroupId(value);
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
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.dataproc.v1.Subcluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.dataproc.v1.Subcluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dataproc.v1.Subcluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterId();
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
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      yandex_cloud_dataproc_v1_common_pb.Resources.serializeBinaryToWriter
    );
  }
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHostsCount();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getAutoscalingConfig();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.yandex.cloud.dataproc.v1.AutoscalingConfig.serializeBinaryToWriter
    );
  }
  f = message.getInstanceGroupId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_id = 2;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
*/
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Role role = 5;
 * @return {!proto.yandex.cloud.dataproc.v1.Role}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getRole = function() {
  return /** @type {!proto.yandex.cloud.dataproc.v1.Role} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.dataproc.v1.Role} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Resources resources = 6;
 * @return {?proto.yandex.cloud.dataproc.v1.Resources}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.dataproc.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_dataproc_v1_common_pb.Resources, 6));
};


/**
 * @param {?proto.yandex.cloud.dataproc.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
*/
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.hasResources = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string subnet_id = 7;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 hosts_count = 8;
 * @return {number}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getHostsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setHostsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional AutoscalingConfig autoscaling_config = 10;
 * @return {?proto.yandex.cloud.dataproc.v1.AutoscalingConfig}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getAutoscalingConfig = function() {
  return /** @type{?proto.yandex.cloud.dataproc.v1.AutoscalingConfig} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.dataproc.v1.AutoscalingConfig, 10));
};


/**
 * @param {?proto.yandex.cloud.dataproc.v1.AutoscalingConfig|undefined} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
*/
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setAutoscalingConfig = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.clearAutoscalingConfig = function() {
  return this.setAutoscalingConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.hasAutoscalingConfig = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string instance_group_id = 11;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.getInstanceGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Subcluster} returns this
 */
proto.yandex.cloud.dataproc.v1.Subcluster.prototype.setInstanceGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
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
proto.yandex.cloud.dataproc.v1.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.dataproc.v1.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.dataproc.v1.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dataproc.v1.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subclusterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    health: jspb.Message.getFieldWithDefault(msg, 3, 0),
    computeInstanceId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    role: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.yandex.cloud.dataproc.v1.Host}
 */
proto.yandex.cloud.dataproc.v1.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.dataproc.v1.Host;
  return proto.yandex.cloud.dataproc.v1.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.dataproc.v1.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.dataproc.v1.Host}
 */
proto.yandex.cloud.dataproc.v1.Host.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSubclusterId(value);
      break;
    case 3:
      var value = /** @type {!proto.yandex.cloud.dataproc.v1.Health} */ (reader.readEnum());
      msg.setHealth(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setComputeInstanceId(value);
      break;
    case 5:
      var value = /** @type {!proto.yandex.cloud.dataproc.v1.Role} */ (reader.readEnum());
      msg.setRole(value);
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
proto.yandex.cloud.dataproc.v1.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.dataproc.v1.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.dataproc.v1.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dataproc.v1.Host.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubclusterId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getComputeInstanceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Host} returns this
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subcluster_id = 2;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.getSubclusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Host} returns this
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.setSubclusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Health health = 3;
 * @return {!proto.yandex.cloud.dataproc.v1.Health}
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.getHealth = function() {
  return /** @type {!proto.yandex.cloud.dataproc.v1.Health} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.yandex.cloud.dataproc.v1.Health} value
 * @return {!proto.yandex.cloud.dataproc.v1.Host} returns this
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string compute_instance_id = 4;
 * @return {string}
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.getComputeInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dataproc.v1.Host} returns this
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.setComputeInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Role role = 5;
 * @return {!proto.yandex.cloud.dataproc.v1.Role}
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.getRole = function() {
  return /** @type {!proto.yandex.cloud.dataproc.v1.Role} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.dataproc.v1.Role} value
 * @return {!proto.yandex.cloud.dataproc.v1.Host} returns this
 */
proto.yandex.cloud.dataproc.v1.Host.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.yandex.cloud.dataproc.v1.Role = {
  ROLE_UNSPECIFIED: 0,
  MASTERNODE: 1,
  DATANODE: 2,
  COMPUTENODE: 3
};

goog.object.extend(exports, proto.yandex.cloud.dataproc.v1);
