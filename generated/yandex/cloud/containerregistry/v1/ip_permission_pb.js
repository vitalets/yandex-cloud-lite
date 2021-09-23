// source: yandex/cloud/containerregistry/v1/ip_permission.proto
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
goog.exportSymbol('proto.yandex.cloud.containerregistry.v1.IpPermission', null, global);
goog.exportSymbol('proto.yandex.cloud.containerregistry.v1.IpPermission.Action', null, global);
goog.exportSymbol('proto.yandex.cloud.containerregistry.v1.IpPermissionAction', null, global);
goog.exportSymbol('proto.yandex.cloud.containerregistry.v1.IpPermissionDelta', null, global);
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
proto.yandex.cloud.containerregistry.v1.IpPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.containerregistry.v1.IpPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.containerregistry.v1.IpPermission.displayName = 'proto.yandex.cloud.containerregistry.v1.IpPermission';
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
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.containerregistry.v1.IpPermissionDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.displayName = 'proto.yandex.cloud.containerregistry.v1.IpPermissionDelta';
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
proto.yandex.cloud.containerregistry.v1.IpPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.containerregistry.v1.IpPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermission}
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.containerregistry.v1.IpPermission;
  return proto.yandex.cloud.containerregistry.v1.IpPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermission}
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.containerregistry.v1.IpPermission.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
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
proto.yandex.cloud.containerregistry.v1.IpPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.containerregistry.v1.IpPermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.Action = {
  ACTION_UNSPECIFIED: 0,
  PULL: 1,
  PUSH: 2
};

/**
 * optional Action action = 1;
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermission.Action}
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.prototype.getAction = function() {
  return /** @type {!proto.yandex.cloud.containerregistry.v1.IpPermission.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermission.Action} value
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermission} returns this
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string ip = 2;
 * @return {string}
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermission} returns this
 */
proto.yandex.cloud.containerregistry.v1.IpPermission.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ipPermission: (f = msg.getIpPermission()) && proto.yandex.cloud.containerregistry.v1.IpPermission.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta}
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.containerregistry.v1.IpPermissionDelta;
  return proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta}
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.containerregistry.v1.IpPermissionAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.containerregistry.v1.IpPermission;
      reader.readMessage(value,proto.yandex.cloud.containerregistry.v1.IpPermission.deserializeBinaryFromReader);
      msg.setIpPermission(value);
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
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIpPermission();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.containerregistry.v1.IpPermission.serializeBinaryToWriter
    );
  }
};


/**
 * optional IpPermissionAction action = 1;
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermissionAction}
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.getAction = function() {
  return /** @type {!proto.yandex.cloud.containerregistry.v1.IpPermissionAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.containerregistry.v1.IpPermissionAction} value
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta} returns this
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional IpPermission ip_permission = 2;
 * @return {?proto.yandex.cloud.containerregistry.v1.IpPermission}
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.getIpPermission = function() {
  return /** @type{?proto.yandex.cloud.containerregistry.v1.IpPermission} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.containerregistry.v1.IpPermission, 2));
};


/**
 * @param {?proto.yandex.cloud.containerregistry.v1.IpPermission|undefined} value
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta} returns this
*/
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.setIpPermission = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.containerregistry.v1.IpPermissionDelta} returns this
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.clearIpPermission = function() {
  return this.setIpPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionDelta.prototype.hasIpPermission = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.yandex.cloud.containerregistry.v1.IpPermissionAction = {
  IP_PERMISSION_ACTION_UNSPECIFIED: 0,
  ADD: 1,
  REMOVE: 2
};

goog.object.extend(exports, proto.yandex.cloud.containerregistry.v1);