// source: yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var yandex_cloud_validation_pb = require('../../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7', null, global);
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
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7';
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
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7';
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
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxClauseCount: (f = msg.getMaxClauseCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    fielddataCacheSize: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7;
  return proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMaxClauseCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFielddataCacheSize(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxClauseCount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getFielddataCacheSize();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional google.protobuf.Int64Value max_clause_count = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.getMaxClauseCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.setMaxClauseCount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.clearMaxClauseCount = function() {
  return this.setMaxClauseCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.hasMaxClauseCount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string fielddata_cache_size = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.getFielddataCacheSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.prototype.setFielddataCacheSize = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.toObject = function(includeInstance, msg) {
  var f, obj = {
    effectiveConfig: (f = msg.getEffectiveConfig()) && proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.toObject(includeInstance, f),
    userConfig: (f = msg.getUserConfig()) && proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.toObject(includeInstance, f),
    defaultConfig: (f = msg.getDefaultConfig()) && proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7;
  return proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.deserializeBinaryFromReader);
      msg.setEffectiveConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.deserializeBinaryFromReader);
      msg.setUserConfig(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.deserializeBinaryFromReader);
      msg.setDefaultConfig(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEffectiveConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.serializeBinaryToWriter
    );
  }
  f = message.getUserConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.serializeBinaryToWriter
    );
  }
  f = message.getDefaultConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7.serializeBinaryToWriter
    );
  }
};


/**
 * optional ElasticsearchConfig7 effective_config = 1;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.getEffectiveConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.setEffectiveConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.clearEffectiveConfig = function() {
  return this.setEffectiveConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.hasEffectiveConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ElasticsearchConfig7 user_config = 2;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.getUserConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.setUserConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.clearUserConfig = function() {
  return this.setUserConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.hasUserConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ElasticsearchConfig7 default_config = 3;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.getDefaultConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.setDefaultConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.clearDefaultConfig = function() {
  return this.setDefaultConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7.prototype.hasDefaultConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.yandex.cloud.mdb.elasticsearch.v1.config);
