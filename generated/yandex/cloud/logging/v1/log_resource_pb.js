// source: yandex/cloud/logging/v1/log_resource.proto
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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.logging.v1.LogEntryResource', null, global);
goog.exportSymbol('proto.yandex.cloud.logging.v1.LogGroupResource', null, global);
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
proto.yandex.cloud.logging.v1.LogEntryResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.logging.v1.LogEntryResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.logging.v1.LogEntryResource.displayName = 'proto.yandex.cloud.logging.v1.LogEntryResource';
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
proto.yandex.cloud.logging.v1.LogGroupResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.logging.v1.LogGroupResource.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.logging.v1.LogGroupResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.logging.v1.LogGroupResource.displayName = 'proto.yandex.cloud.logging.v1.LogGroupResource';
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
proto.yandex.cloud.logging.v1.LogEntryResource.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.logging.v1.LogEntryResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.logging.v1.LogEntryResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.LogEntryResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.logging.v1.LogEntryResource}
 */
proto.yandex.cloud.logging.v1.LogEntryResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.logging.v1.LogEntryResource;
  return proto.yandex.cloud.logging.v1.LogEntryResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.logging.v1.LogEntryResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.logging.v1.LogEntryResource}
 */
proto.yandex.cloud.logging.v1.LogEntryResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
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
proto.yandex.cloud.logging.v1.LogEntryResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.logging.v1.LogEntryResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.logging.v1.LogEntryResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.LogEntryResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.yandex.cloud.logging.v1.LogEntryResource.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.logging.v1.LogEntryResource} returns this
 */
proto.yandex.cloud.logging.v1.LogEntryResource.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.yandex.cloud.logging.v1.LogEntryResource.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.logging.v1.LogEntryResource} returns this
 */
proto.yandex.cloud.logging.v1.LogEntryResource.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.logging.v1.LogGroupResource.repeatedFields_ = [2];



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
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.logging.v1.LogGroupResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.logging.v1.LogGroupResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.LogGroupResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    idsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.logging.v1.LogGroupResource}
 */
proto.yandex.cloud.logging.v1.LogGroupResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.logging.v1.LogGroupResource;
  return proto.yandex.cloud.logging.v1.LogGroupResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.logging.v1.LogGroupResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.logging.v1.LogGroupResource}
 */
proto.yandex.cloud.logging.v1.LogGroupResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
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
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.logging.v1.LogGroupResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.logging.v1.LogGroupResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.LogGroupResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.logging.v1.LogGroupResource} returns this
 */
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string ids = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.logging.v1.LogGroupResource} returns this
 */
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.logging.v1.LogGroupResource} returns this
 */
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.logging.v1.LogGroupResource} returns this
 */
proto.yandex.cloud.logging.v1.LogGroupResource.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


goog.object.extend(exports, proto.yandex.cloud.logging.v1);