// source: yandex/cloud/oauth/claims.proto
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

var yandex_cloud_validation_pb = require('../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.oauth.Federation', null, global);
goog.exportSymbol('proto.yandex.cloud.oauth.SubjectClaims', null, global);
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
proto.yandex.cloud.oauth.SubjectClaims = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.oauth.SubjectClaims, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.oauth.SubjectClaims.displayName = 'proto.yandex.cloud.oauth.SubjectClaims';
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
proto.yandex.cloud.oauth.Federation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.oauth.Federation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.oauth.Federation.displayName = 'proto.yandex.cloud.oauth.Federation';
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
proto.yandex.cloud.oauth.SubjectClaims.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.oauth.SubjectClaims.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.oauth.SubjectClaims} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.oauth.SubjectClaims.toObject = function(includeInstance, msg) {
  var f, obj = {
    sub: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    givenName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    familyName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    preferredUsername: jspb.Message.getFieldWithDefault(msg, 7, ""),
    picture: jspb.Message.getFieldWithDefault(msg, 9, ""),
    email: jspb.Message.getFieldWithDefault(msg, 11, ""),
    zoneinfo: jspb.Message.getFieldWithDefault(msg, 15, ""),
    locale: jspb.Message.getFieldWithDefault(msg, 16, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 17, ""),
    federation: (f = msg.getFederation()) && proto.yandex.cloud.oauth.Federation.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.oauth.SubjectClaims}
 */
proto.yandex.cloud.oauth.SubjectClaims.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.oauth.SubjectClaims;
  return proto.yandex.cloud.oauth.SubjectClaims.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.oauth.SubjectClaims} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.oauth.SubjectClaims}
 */
proto.yandex.cloud.oauth.SubjectClaims.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSub(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFamilyName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredUsername(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPicture(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneinfo(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 100:
      var value = new proto.yandex.cloud.oauth.Federation;
      reader.readMessage(value,proto.yandex.cloud.oauth.Federation.deserializeBinaryFromReader);
      msg.setFederation(value);
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
proto.yandex.cloud.oauth.SubjectClaims.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.oauth.SubjectClaims.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.oauth.SubjectClaims} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.oauth.SubjectClaims.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSub();
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
  f = message.getGivenName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFamilyName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPreferredUsername();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPicture();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getZoneinfo();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getFederation();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.yandex.cloud.oauth.Federation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sub = 1;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getSub = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setSub = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string given_name = 3;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setGivenName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string family_name = 4;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getFamilyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setFamilyName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string preferred_username = 7;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getPreferredUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setPreferredUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string picture = 9;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getPicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setPicture = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string email = 11;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string zoneinfo = 15;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getZoneinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setZoneinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string locale = 16;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string phone_number = 17;
 * @return {string}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional Federation federation = 100;
 * @return {?proto.yandex.cloud.oauth.Federation}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.getFederation = function() {
  return /** @type{?proto.yandex.cloud.oauth.Federation} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.oauth.Federation, 100));
};


/**
 * @param {?proto.yandex.cloud.oauth.Federation|undefined} value
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
*/
proto.yandex.cloud.oauth.SubjectClaims.prototype.setFederation = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.oauth.SubjectClaims} returns this
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.clearFederation = function() {
  return this.setFederation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.oauth.SubjectClaims.prototype.hasFederation = function() {
  return jspb.Message.getField(this, 100) != null;
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
proto.yandex.cloud.oauth.Federation.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.oauth.Federation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.oauth.Federation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.oauth.Federation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.oauth.Federation}
 */
proto.yandex.cloud.oauth.Federation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.oauth.Federation;
  return proto.yandex.cloud.oauth.Federation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.oauth.Federation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.oauth.Federation}
 */
proto.yandex.cloud.oauth.Federation.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
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
proto.yandex.cloud.oauth.Federation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.oauth.Federation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.oauth.Federation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.oauth.Federation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.oauth.Federation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.Federation} returns this
 */
proto.yandex.cloud.oauth.Federation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yandex.cloud.oauth.Federation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.oauth.Federation} returns this
 */
proto.yandex.cloud.oauth.Federation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.yandex.cloud.oauth);