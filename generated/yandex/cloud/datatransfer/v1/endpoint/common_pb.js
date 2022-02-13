// source: yandex/cloud/datatransfer/v1/endpoint/common.proto
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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.endpoint.CleanupPolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.endpoint.ObjectTransferStage', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.endpoint.Secret', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.endpoint.Secret.ValueCase', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.TlsModeCase', null, global);
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
proto.yandex.cloud.datatransfer.v1.endpoint.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.datatransfer.v1.endpoint.Secret.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.datatransfer.v1.endpoint.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.datatransfer.v1.endpoint.Secret.displayName = 'proto.yandex.cloud.datatransfer.v1.endpoint.Secret';
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
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.displayName = 'proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode';
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
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.displayName = 'proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.ValueCase = {
  VALUE_NOT_SET: 0,
  RAW: 1
};

/**
 * @return {proto.yandex.cloud.datatransfer.v1.endpoint.Secret.ValueCase}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.prototype.getValueCase = function() {
  return /** @type {proto.yandex.cloud.datatransfer.v1.endpoint.Secret.ValueCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.datatransfer.v1.endpoint.Secret.oneofGroups_[0]));
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
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.datatransfer.v1.endpoint.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.Secret}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.datatransfer.v1.endpoint.Secret;
  return proto.yandex.cloud.datatransfer.v1.endpoint.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.Secret}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
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
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.datatransfer.v1.endpoint.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string raw = 1;
 * @return {string}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.Secret} returns this
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.prototype.setRaw = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.datatransfer.v1.endpoint.Secret.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.Secret} returns this
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.prototype.clearRaw = function() {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.datatransfer.v1.endpoint.Secret.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.Secret.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.TlsModeCase = {
  TLS_MODE_NOT_SET: 0,
  DISABLED: 1,
  ENABLED: 2
};

/**
 * @return {proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.TlsModeCase}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.getTlsModeCase = function() {
  return /** @type {proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.TlsModeCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.oneofGroups_[0]));
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
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: (f = msg.getDisabled()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
    enabled: (f = msg.getEnabled()) && proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode;
  return proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setDisabled(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig;
      reader.readMessage(value,proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.deserializeBinaryFromReader);
      msg.setEnabled(value);
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
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisabled();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty disabled = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.getDisabled = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode} returns this
*/
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.setDisabled = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode} returns this
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.clearDisabled = function() {
  return this.setDisabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.hasDisabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TLSConfig enabled = 2;
 * @return {?proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.getEnabled = function() {
  return /** @type{?proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig, 2));
};


/**
 * @param {?proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig|undefined} value
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode} returns this
*/
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.setEnabled = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode} returns this
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.clearEnabled = function() {
  return this.setEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSMode.prototype.hasEnabled = function() {
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
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    caCertificate: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig;
  return proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaCertificate(value);
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
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCaCertificate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ca_certificate = 1;
 * @return {string}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.prototype.getCaCertificate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig} returns this
 */
proto.yandex.cloud.datatransfer.v1.endpoint.TLSConfig.prototype.setCaCertificate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.ObjectTransferStage = {
  OBJECT_TRANSFER_STAGE_UNSPECIFIED: 0,
  BEFORE_DATA: 1,
  AFTER_DATA: 2,
  NEVER: 3
};

/**
 * @enum {number}
 */
proto.yandex.cloud.datatransfer.v1.endpoint.CleanupPolicy = {
  CLEANUP_POLICY_UNSPECIFIED: 0,
  DISABLED: 1,
  DROP: 2,
  TRUNCATE: 3
};

goog.object.extend(exports, proto.yandex.cloud.datatransfer.v1.endpoint);