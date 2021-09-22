// source: yandex/cloud/apploadbalancer/v1/tls.proto
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

var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ValidationContext', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ValidationContext.TrustedCaCase', null, global);
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
proto.yandex.cloud.apploadbalancer.v1.ValidationContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.apploadbalancer.v1.ValidationContext.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ValidationContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ValidationContext.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ValidationContext';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.TrustedCaCase = {
  TRUSTED_CA_NOT_SET: 0,
  TRUSTED_CA_ID: 1,
  TRUSTED_CA_BYTES: 2
};

/**
 * @return {proto.yandex.cloud.apploadbalancer.v1.ValidationContext.TrustedCaCase}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.getTrustedCaCase = function() {
  return /** @type {proto.yandex.cloud.apploadbalancer.v1.ValidationContext.TrustedCaCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.apploadbalancer.v1.ValidationContext.oneofGroups_[0]));
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
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ValidationContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    trustedCaId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    trustedCaBytes: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ValidationContext;
  return proto.yandex.cloud.apploadbalancer.v1.ValidationContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrustedCaId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrustedCaBytes(value);
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
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ValidationContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
};


/**
 * optional string trusted_ca_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.getTrustedCaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.setTrustedCaId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.apploadbalancer.v1.ValidationContext.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.clearTrustedCaId = function() {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.apploadbalancer.v1.ValidationContext.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.hasTrustedCaId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string trusted_ca_bytes = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.getTrustedCaBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.setTrustedCaBytes = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.apploadbalancer.v1.ValidationContext.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ValidationContext} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.clearTrustedCaBytes = function() {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.apploadbalancer.v1.ValidationContext.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.ValidationContext.prototype.hasTrustedCaBytes = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.yandex.cloud.apploadbalancer.v1);
