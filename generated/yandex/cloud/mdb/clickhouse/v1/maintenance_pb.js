// source: yandex/cloud/mdb/clickhouse/v1/maintenance.proto
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
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.PolicyCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.WeekDay', null, global);
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
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.displayName = 'proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow';
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
proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.displayName = 'proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow';
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
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.displayName = 'proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow';
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
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.displayName = 'proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.PolicyCase = {
  POLICY_NOT_SET: 0,
  ANYTIME: 1,
  WEEKLY_MAINTENANCE_WINDOW: 2
};

/**
 * @return {proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.PolicyCase}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.getPolicyCase = function() {
  return /** @type {proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.PolicyCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    anytime: (f = msg.getAnytime()) && proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.toObject(includeInstance, f),
    weeklyMaintenanceWindow: (f = msg.getWeeklyMaintenanceWindow()) && proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow;
  return proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow;
      reader.readMessage(value,proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.deserializeBinaryFromReader);
      msg.setAnytime(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow;
      reader.readMessage(value,proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnytime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.serializeBinaryToWriter
    );
  }
  f = message.getWeeklyMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional AnytimeMaintenanceWindow anytime = 1;
 * @return {?proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.getAnytime = function() {
  return /** @type{?proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow} returns this
*/
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.setAnytime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow} returns this
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.clearAnytime = function() {
  return this.setAnytime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.hasAnytime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WeeklyMaintenanceWindow weekly_maintenance_window = 2;
 * @return {?proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.getWeeklyMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow} returns this
*/
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.setWeeklyMaintenanceWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow} returns this
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.clearWeeklyMaintenanceWindow = function() {
  return this.setWeeklyMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceWindow.prototype.hasWeeklyMaintenanceWindow = function() {
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
proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow;
  return proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.AnytimeMaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    day: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hour: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow;
  return proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow}
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.WeekDay} */ (reader.readEnum());
      msg.setDay(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHour(value);
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
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDay();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getHour();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.WeekDay = {
  WEEK_DAY_UNSPECIFIED: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
  SUN: 7
};

/**
 * optional WeekDay day = 1;
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.WeekDay}
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.prototype.getDay = function() {
  return /** @type {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.WeekDay} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.WeekDay} value
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow} returns this
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.prototype.setDay = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 hour = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.prototype.getHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow} returns this
 */
proto.yandex.cloud.mdb.clickhouse.v1.WeeklyMaintenanceWindow.prototype.setHour = function(value) {
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
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: jspb.Message.getFieldWithDefault(msg, 1, ""),
    delayedUntil: (f = msg.getDelayedUntil()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation;
  return proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDelayedUntil(value);
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
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDelayedUntil();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string info = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation} returns this
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp delayed_until = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.getDelayedUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation} returns this
*/
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.setDelayedUntil = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation} returns this
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.clearDelayedUntil = function() {
  return this.setDelayedUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.clickhouse.v1.MaintenanceOperation.prototype.hasDelayedUntil = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.yandex.cloud.mdb.clickhouse.v1);
