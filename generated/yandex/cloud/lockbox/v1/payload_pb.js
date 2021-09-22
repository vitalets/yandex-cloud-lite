// source: yandex/cloud/lockbox/v1/payload.proto
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

goog.exportSymbol('proto.yandex.cloud.lockbox.v1.Payload', null, global);
goog.exportSymbol('proto.yandex.cloud.lockbox.v1.Payload.Entry', null, global);
goog.exportSymbol('proto.yandex.cloud.lockbox.v1.Payload.Entry.ValueCase', null, global);
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
proto.yandex.cloud.lockbox.v1.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.lockbox.v1.Payload.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.lockbox.v1.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.lockbox.v1.Payload.displayName = 'proto.yandex.cloud.lockbox.v1.Payload';
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
proto.yandex.cloud.lockbox.v1.Payload.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.lockbox.v1.Payload.Entry.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.lockbox.v1.Payload.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.lockbox.v1.Payload.Entry.displayName = 'proto.yandex.cloud.lockbox.v1.Payload.Entry';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.lockbox.v1.Payload.repeatedFields_ = [2];



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
proto.yandex.cloud.lockbox.v1.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.lockbox.v1.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.lockbox.v1.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.lockbox.v1.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.yandex.cloud.lockbox.v1.Payload.Entry.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.lockbox.v1.Payload}
 */
proto.yandex.cloud.lockbox.v1.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.lockbox.v1.Payload;
  return proto.yandex.cloud.lockbox.v1.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.lockbox.v1.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.lockbox.v1.Payload}
 */
proto.yandex.cloud.lockbox.v1.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.lockbox.v1.Payload.Entry;
      reader.readMessage(value,proto.yandex.cloud.lockbox.v1.Payload.Entry.deserializeBinaryFromReader);
      msg.addEntries(value);
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
proto.yandex.cloud.lockbox.v1.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.lockbox.v1.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.lockbox.v1.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.lockbox.v1.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yandex.cloud.lockbox.v1.Payload.Entry.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.ValueCase = {
  VALUE_NOT_SET: 0,
  TEXT_VALUE: 2,
  BINARY_VALUE: 3
};

/**
 * @return {proto.yandex.cloud.lockbox.v1.Payload.Entry.ValueCase}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.getValueCase = function() {
  return /** @type {proto.yandex.cloud.lockbox.v1.Payload.Entry.ValueCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.lockbox.v1.Payload.Entry.oneofGroups_[0]));
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
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.lockbox.v1.Payload.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.lockbox.v1.Payload.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    textValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    binaryValue: msg.getBinaryValue_asB64()
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
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.lockbox.v1.Payload.Entry;
  return proto.yandex.cloud.lockbox.v1.Payload.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.lockbox.v1.Payload.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTextValue(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinaryValue(value);
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
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.lockbox.v1.Payload.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.lockbox.v1.Payload.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
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
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry} returns this
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text_value = 2;
 * @return {string}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.getTextValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry} returns this
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.setTextValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.lockbox.v1.Payload.Entry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry} returns this
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.clearTextValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.lockbox.v1.Payload.Entry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.hasTextValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes binary_value = 3;
 * @return {!(string|Uint8Array)}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.getBinaryValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes binary_value = 3;
 * This is a type-conversion wrapper around `getBinaryValue()`
 * @return {string}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.getBinaryValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinaryValue()));
};


/**
 * optional bytes binary_value = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinaryValue()`
 * @return {!Uint8Array}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.getBinaryValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinaryValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry} returns this
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.setBinaryValue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.yandex.cloud.lockbox.v1.Payload.Entry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry} returns this
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.clearBinaryValue = function() {
  return jspb.Message.setOneofField(this, 3, proto.yandex.cloud.lockbox.v1.Payload.Entry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.lockbox.v1.Payload.Entry.prototype.hasBinaryValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string version_id = 1;
 * @return {string}
 */
proto.yandex.cloud.lockbox.v1.Payload.prototype.getVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.lockbox.v1.Payload} returns this
 */
proto.yandex.cloud.lockbox.v1.Payload.prototype.setVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Entry entries = 2;
 * @return {!Array<!proto.yandex.cloud.lockbox.v1.Payload.Entry>}
 */
proto.yandex.cloud.lockbox.v1.Payload.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.lockbox.v1.Payload.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.lockbox.v1.Payload.Entry, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.lockbox.v1.Payload.Entry>} value
 * @return {!proto.yandex.cloud.lockbox.v1.Payload} returns this
*/
proto.yandex.cloud.lockbox.v1.Payload.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.lockbox.v1.Payload.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.lockbox.v1.Payload.Entry}
 */
proto.yandex.cloud.lockbox.v1.Payload.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.lockbox.v1.Payload.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.lockbox.v1.Payload} returns this
 */
proto.yandex.cloud.lockbox.v1.Payload.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


goog.object.extend(exports, proto.yandex.cloud.lockbox.v1);
