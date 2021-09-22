// source: yandex/cloud/k8s/v1/maintenance.proto
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

var google_type_dayofweek_pb = require('../../../../google/type/dayofweek_pb.js');
goog.object.extend(proto, google_type_dayofweek_pb);
var google_type_timeofday_pb = require('../../../../google/type/timeofday_pb.js');
goog.object.extend(proto, google_type_timeofday_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow', null, global);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow', null, global);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow', null, global);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.MaintenanceWindow', null, global);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.MaintenanceWindow.PolicyCase', null, global);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow', null, global);
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
proto.yandex.cloud.k8s.v1.MaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.k8s.v1.MaintenanceWindow.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.k8s.v1.MaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.k8s.v1.MaintenanceWindow.displayName = 'proto.yandex.cloud.k8s.v1.MaintenanceWindow';
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
proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.displayName = 'proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow';
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
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.displayName = 'proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow';
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
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.displayName = 'proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow';
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
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.displayName = 'proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.PolicyCase = {
  POLICY_NOT_SET: 0,
  ANYTIME: 1,
  DAILY_MAINTENANCE_WINDOW: 2,
  WEEKLY_MAINTENANCE_WINDOW: 3
};

/**
 * @return {proto.yandex.cloud.k8s.v1.MaintenanceWindow.PolicyCase}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.getPolicyCase = function() {
  return /** @type {proto.yandex.cloud.k8s.v1.MaintenanceWindow.PolicyCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.k8s.v1.MaintenanceWindow.oneofGroups_[0]));
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
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.k8s.v1.MaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    anytime: (f = msg.getAnytime()) && proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.toObject(includeInstance, f),
    dailyMaintenanceWindow: (f = msg.getDailyMaintenanceWindow()) && proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.toObject(includeInstance, f),
    weeklyMaintenanceWindow: (f = msg.getWeeklyMaintenanceWindow()) && proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.k8s.v1.MaintenanceWindow;
  return proto.yandex.cloud.k8s.v1.MaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow;
      reader.readMessage(value,proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.deserializeBinaryFromReader);
      msg.setAnytime(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow;
      reader.readMessage(value,proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.deserializeBinaryFromReader);
      msg.setDailyMaintenanceWindow(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow;
      reader.readMessage(value,proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.deserializeBinaryFromReader);
      msg.setWeeklyMaintenanceWindow(value);
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
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.k8s.v1.MaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnytime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.serializeBinaryToWriter
    );
  }
  f = message.getDailyMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.serializeBinaryToWriter
    );
  }
  f = message.getWeeklyMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional AnytimeMaintenanceWindow anytime = 1;
 * @return {?proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.getAnytime = function() {
  return /** @type{?proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow, 1));
};


/**
 * @param {?proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.setAnytime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.k8s.v1.MaintenanceWindow.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.clearAnytime = function() {
  return this.setAnytime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.hasAnytime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DailyMaintenanceWindow daily_maintenance_window = 2;
 * @return {?proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.getDailyMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow, 2));
};


/**
 * @param {?proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.setDailyMaintenanceWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.k8s.v1.MaintenanceWindow.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.clearDailyMaintenanceWindow = function() {
  return this.setDailyMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.hasDailyMaintenanceWindow = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WeeklyMaintenanceWindow weekly_maintenance_window = 3;
 * @return {?proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.getWeeklyMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow, 3));
};


/**
 * @param {?proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.setWeeklyMaintenanceWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.k8s.v1.MaintenanceWindow.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.MaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.clearWeeklyMaintenanceWindow = function() {
  return this.setWeeklyMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.MaintenanceWindow.prototype.hasWeeklyMaintenanceWindow = function() {
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
proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow;
  return proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.AnytimeMaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: (f = msg.getStartTime()) && google_type_timeofday_pb.TimeOfDay.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow;
  return proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_type_timeofday_pb.TimeOfDay;
      reader.readMessage(value,google_type_timeofday_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
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
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_type_timeofday_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.type.TimeOfDay start_time = 1;
 * @return {?proto.google.type.TimeOfDay}
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.getStartTime = function() {
  return /** @type{?proto.google.type.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, google_type_timeofday_pb.TimeOfDay, 1));
};


/**
 * @param {?proto.google.type.TimeOfDay|undefined} value
 * @return {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.DailyMaintenanceWindow.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.repeatedFields_ = [1];



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
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    daysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    startTime: (f = msg.getStartTime()) && google_type_timeofday_pb.TimeOfDay.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow;
  return proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.google.type.DayOfWeek>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDays(values[i]);
      }
      break;
    case 2:
      var value = new google_type_timeofday_pb.TimeOfDay;
      reader.readMessage(value,google_type_timeofday_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
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
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDaysList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_type_timeofday_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.type.DayOfWeek days = 1;
 * @return {!Array<!proto.google.type.DayOfWeek>}
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.getDaysList = function() {
  return /** @type {!Array<!proto.google.type.DayOfWeek>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.google.type.DayOfWeek>} value
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.setDaysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.google.type.DayOfWeek} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.addDays = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.clearDaysList = function() {
  return this.setDaysList([]);
};


/**
 * optional google.type.TimeOfDay start_time = 2;
 * @return {?proto.google.type.TimeOfDay}
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.getStartTime = function() {
  return /** @type{?proto.google.type.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, google_type_timeofday_pb.TimeOfDay, 2));
};


/**
 * @param {?proto.google.type.TimeOfDay|undefined} value
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.repeatedFields_ = [1];



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
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    daysOfWeekList: jspb.Message.toObjectList(msg.getDaysOfWeekList(),
    proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow;
  return proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow;
      reader.readMessage(value,proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.deserializeBinaryFromReader);
      msg.addDaysOfWeek(value);
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
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDaysOfWeekList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DaysOfWeekMaintenanceWindow days_of_week = 1;
 * @return {!Array<!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow>}
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.prototype.getDaysOfWeekList = function() {
  return /** @type{!Array<!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow>} value
 * @return {!proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow} returns this
*/
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.prototype.setDaysOfWeekList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow}
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.prototype.addDaysOfWeek = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow} returns this
 */
proto.yandex.cloud.k8s.v1.WeeklyMaintenanceWindow.prototype.clearDaysOfWeekList = function() {
  return this.setDaysOfWeekList([]);
};


goog.object.extend(exports, proto.yandex.cloud.k8s.v1);
