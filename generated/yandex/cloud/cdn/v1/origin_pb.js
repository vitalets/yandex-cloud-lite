// source: yandex/cloud/cdn/v1/origin.proto
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

goog.exportSymbol('proto.yandex.cloud.cdn.v1.Origin', null, global);
goog.exportSymbol('proto.yandex.cloud.cdn.v1.OriginBalancerMeta', null, global);
goog.exportSymbol('proto.yandex.cloud.cdn.v1.OriginMeta', null, global);
goog.exportSymbol('proto.yandex.cloud.cdn.v1.OriginMeta.OriginMetaVariantCase', null, global);
goog.exportSymbol('proto.yandex.cloud.cdn.v1.OriginNamedMeta', null, global);
goog.exportSymbol('proto.yandex.cloud.cdn.v1.OriginParams', null, global);
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
proto.yandex.cloud.cdn.v1.Origin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.cdn.v1.Origin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.cdn.v1.Origin.displayName = 'proto.yandex.cloud.cdn.v1.Origin';
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
proto.yandex.cloud.cdn.v1.OriginParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.cdn.v1.OriginParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.cdn.v1.OriginParams.displayName = 'proto.yandex.cloud.cdn.v1.OriginParams';
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
proto.yandex.cloud.cdn.v1.OriginMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.cdn.v1.OriginMeta.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.cdn.v1.OriginMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.cdn.v1.OriginMeta.displayName = 'proto.yandex.cloud.cdn.v1.OriginMeta';
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
proto.yandex.cloud.cdn.v1.OriginNamedMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.cdn.v1.OriginNamedMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.cdn.v1.OriginNamedMeta.displayName = 'proto.yandex.cloud.cdn.v1.OriginNamedMeta';
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
proto.yandex.cloud.cdn.v1.OriginBalancerMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.cdn.v1.OriginBalancerMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.cdn.v1.OriginBalancerMeta.displayName = 'proto.yandex.cloud.cdn.v1.OriginBalancerMeta';
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
proto.yandex.cloud.cdn.v1.Origin.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.cdn.v1.Origin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.cdn.v1.Origin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.Origin.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    originGroupId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    source: jspb.Message.getFieldWithDefault(msg, 3, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    backup: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    meta: (f = msg.getMeta()) && proto.yandex.cloud.cdn.v1.OriginMeta.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.cdn.v1.Origin}
 */
proto.yandex.cloud.cdn.v1.Origin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.cdn.v1.Origin;
  return proto.yandex.cloud.cdn.v1.Origin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.cdn.v1.Origin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.cdn.v1.Origin}
 */
proto.yandex.cloud.cdn.v1.Origin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOriginGroupId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBackup(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.cdn.v1.OriginMeta;
      reader.readMessage(value,proto.yandex.cloud.cdn.v1.OriginMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
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
proto.yandex.cloud.cdn.v1.Origin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.cdn.v1.Origin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.cdn.v1.Origin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.Origin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOriginGroupId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBackup();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.cdn.v1.OriginMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.cdn.v1.Origin} returns this
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 origin_group_id = 2;
 * @return {number}
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.getOriginGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.cdn.v1.Origin} returns this
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.setOriginGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string source = 3;
 * @return {string}
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.cdn.v1.Origin} returns this
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool enabled = 4;
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.cdn.v1.Origin} returns this
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool backup = 5;
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.getBackup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.cdn.v1.Origin} returns this
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.setBackup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional OriginMeta meta = 6;
 * @return {?proto.yandex.cloud.cdn.v1.OriginMeta}
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.getMeta = function() {
  return /** @type{?proto.yandex.cloud.cdn.v1.OriginMeta} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.cdn.v1.OriginMeta, 6));
};


/**
 * @param {?proto.yandex.cloud.cdn.v1.OriginMeta|undefined} value
 * @return {!proto.yandex.cloud.cdn.v1.Origin} returns this
*/
proto.yandex.cloud.cdn.v1.Origin.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.cdn.v1.Origin} returns this
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.Origin.prototype.hasMeta = function() {
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
proto.yandex.cloud.cdn.v1.OriginParams.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.cdn.v1.OriginParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.cdn.v1.OriginParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    backup: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    meta: (f = msg.getMeta()) && proto.yandex.cloud.cdn.v1.OriginMeta.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.cdn.v1.OriginParams}
 */
proto.yandex.cloud.cdn.v1.OriginParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.cdn.v1.OriginParams;
  return proto.yandex.cloud.cdn.v1.OriginParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.cdn.v1.OriginParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.cdn.v1.OriginParams}
 */
proto.yandex.cloud.cdn.v1.OriginParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBackup(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.cdn.v1.OriginMeta;
      reader.readMessage(value,proto.yandex.cloud.cdn.v1.OriginMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
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
proto.yandex.cloud.cdn.v1.OriginParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.cdn.v1.OriginParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.cdn.v1.OriginParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBackup();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.cdn.v1.OriginMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional string source = 1;
 * @return {string}
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginParams} returns this
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginParams} returns this
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool backup = 3;
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.getBackup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginParams} returns this
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.setBackup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional OriginMeta meta = 4;
 * @return {?proto.yandex.cloud.cdn.v1.OriginMeta}
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.getMeta = function() {
  return /** @type{?proto.yandex.cloud.cdn.v1.OriginMeta} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.cdn.v1.OriginMeta, 4));
};


/**
 * @param {?proto.yandex.cloud.cdn.v1.OriginMeta|undefined} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginParams} returns this
*/
proto.yandex.cloud.cdn.v1.OriginParams.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.cdn.v1.OriginParams} returns this
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginParams.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.cdn.v1.OriginMeta.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.OriginMetaVariantCase = {
  ORIGIN_META_VARIANT_NOT_SET: 0,
  COMMON: 1,
  BUCKET: 2,
  WEBSITE: 3,
  BALANCER: 4
};

/**
 * @return {proto.yandex.cloud.cdn.v1.OriginMeta.OriginMetaVariantCase}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.getOriginMetaVariantCase = function() {
  return /** @type {proto.yandex.cloud.cdn.v1.OriginMeta.OriginMetaVariantCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.cdn.v1.OriginMeta.oneofGroups_[0]));
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
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.cdn.v1.OriginMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.cdn.v1.OriginMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.yandex.cloud.cdn.v1.OriginNamedMeta.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && proto.yandex.cloud.cdn.v1.OriginNamedMeta.toObject(includeInstance, f),
    website: (f = msg.getWebsite()) && proto.yandex.cloud.cdn.v1.OriginNamedMeta.toObject(includeInstance, f),
    balancer: (f = msg.getBalancer()) && proto.yandex.cloud.cdn.v1.OriginBalancerMeta.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.cdn.v1.OriginMeta;
  return proto.yandex.cloud.cdn.v1.OriginMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.cdn.v1.OriginMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.cdn.v1.OriginNamedMeta;
      reader.readMessage(value,proto.yandex.cloud.cdn.v1.OriginNamedMeta.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.cdn.v1.OriginNamedMeta;
      reader.readMessage(value,proto.yandex.cloud.cdn.v1.OriginNamedMeta.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.cdn.v1.OriginNamedMeta;
      reader.readMessage(value,proto.yandex.cloud.cdn.v1.OriginNamedMeta.deserializeBinaryFromReader);
      msg.setWebsite(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.cdn.v1.OriginBalancerMeta;
      reader.readMessage(value,proto.yandex.cloud.cdn.v1.OriginBalancerMeta.deserializeBinaryFromReader);
      msg.setBalancer(value);
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
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.cdn.v1.OriginMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.cdn.v1.OriginMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.cdn.v1.OriginNamedMeta.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.cdn.v1.OriginNamedMeta.serializeBinaryToWriter
    );
  }
  f = message.getWebsite();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.cdn.v1.OriginNamedMeta.serializeBinaryToWriter
    );
  }
  f = message.getBalancer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.cdn.v1.OriginBalancerMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional OriginNamedMeta common = 1;
 * @return {?proto.yandex.cloud.cdn.v1.OriginNamedMeta}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.getCommon = function() {
  return /** @type{?proto.yandex.cloud.cdn.v1.OriginNamedMeta} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.cdn.v1.OriginNamedMeta, 1));
};


/**
 * @param {?proto.yandex.cloud.cdn.v1.OriginNamedMeta|undefined} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
*/
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.setCommon = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.cdn.v1.OriginMeta.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OriginNamedMeta bucket = 2;
 * @return {?proto.yandex.cloud.cdn.v1.OriginNamedMeta}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.getBucket = function() {
  return /** @type{?proto.yandex.cloud.cdn.v1.OriginNamedMeta} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.cdn.v1.OriginNamedMeta, 2));
};


/**
 * @param {?proto.yandex.cloud.cdn.v1.OriginNamedMeta|undefined} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
*/
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.setBucket = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.cdn.v1.OriginMeta.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OriginNamedMeta website = 3;
 * @return {?proto.yandex.cloud.cdn.v1.OriginNamedMeta}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.getWebsite = function() {
  return /** @type{?proto.yandex.cloud.cdn.v1.OriginNamedMeta} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.cdn.v1.OriginNamedMeta, 3));
};


/**
 * @param {?proto.yandex.cloud.cdn.v1.OriginNamedMeta|undefined} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
*/
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.setWebsite = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.cdn.v1.OriginMeta.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.clearWebsite = function() {
  return this.setWebsite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.hasWebsite = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OriginBalancerMeta balancer = 4;
 * @return {?proto.yandex.cloud.cdn.v1.OriginBalancerMeta}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.getBalancer = function() {
  return /** @type{?proto.yandex.cloud.cdn.v1.OriginBalancerMeta} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.cdn.v1.OriginBalancerMeta, 4));
};


/**
 * @param {?proto.yandex.cloud.cdn.v1.OriginBalancerMeta|undefined} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
*/
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.setBalancer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yandex.cloud.cdn.v1.OriginMeta.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.cdn.v1.OriginMeta} returns this
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.clearBalancer = function() {
  return this.setBalancer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginMeta.prototype.hasBalancer = function() {
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
proto.yandex.cloud.cdn.v1.OriginNamedMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.cdn.v1.OriginNamedMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.cdn.v1.OriginNamedMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginNamedMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.cdn.v1.OriginNamedMeta}
 */
proto.yandex.cloud.cdn.v1.OriginNamedMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.cdn.v1.OriginNamedMeta;
  return proto.yandex.cloud.cdn.v1.OriginNamedMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.cdn.v1.OriginNamedMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.cdn.v1.OriginNamedMeta}
 */
proto.yandex.cloud.cdn.v1.OriginNamedMeta.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.cdn.v1.OriginNamedMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.cdn.v1.OriginNamedMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.cdn.v1.OriginNamedMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginNamedMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.cdn.v1.OriginNamedMeta.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginNamedMeta} returns this
 */
proto.yandex.cloud.cdn.v1.OriginNamedMeta.prototype.setName = function(value) {
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
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.cdn.v1.OriginBalancerMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.cdn.v1.OriginBalancerMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.cdn.v1.OriginBalancerMeta}
 */
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.cdn.v1.OriginBalancerMeta;
  return proto.yandex.cloud.cdn.v1.OriginBalancerMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.cdn.v1.OriginBalancerMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.cdn.v1.OriginBalancerMeta}
 */
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.cdn.v1.OriginBalancerMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.cdn.v1.OriginBalancerMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginBalancerMeta} returns this
 */
proto.yandex.cloud.cdn.v1.OriginBalancerMeta.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.yandex.cloud.cdn.v1);