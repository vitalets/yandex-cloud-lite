// source: yandex/cloud/billing/v1/billable_object.proto
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
goog.exportSymbol('proto.yandex.cloud.billing.v1.BillableObject', null, global);
goog.exportSymbol('proto.yandex.cloud.billing.v1.BillableObjectBinding', null, global);
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
proto.yandex.cloud.billing.v1.BillableObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.billing.v1.BillableObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.billing.v1.BillableObject.displayName = 'proto.yandex.cloud.billing.v1.BillableObject';
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
proto.yandex.cloud.billing.v1.BillableObjectBinding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.billing.v1.BillableObjectBinding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.billing.v1.BillableObjectBinding.displayName = 'proto.yandex.cloud.billing.v1.BillableObjectBinding';
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
proto.yandex.cloud.billing.v1.BillableObject.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.billing.v1.BillableObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.billing.v1.BillableObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.billing.v1.BillableObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.billing.v1.BillableObject}
 */
proto.yandex.cloud.billing.v1.BillableObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.billing.v1.BillableObject;
  return proto.yandex.cloud.billing.v1.BillableObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.billing.v1.BillableObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.billing.v1.BillableObject}
 */
proto.yandex.cloud.billing.v1.BillableObject.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
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
proto.yandex.cloud.billing.v1.BillableObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.billing.v1.BillableObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.billing.v1.BillableObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.billing.v1.BillableObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.billing.v1.BillableObject.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.billing.v1.BillableObject} returns this
 */
proto.yandex.cloud.billing.v1.BillableObject.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.yandex.cloud.billing.v1.BillableObject.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.billing.v1.BillableObject} returns this
 */
proto.yandex.cloud.billing.v1.BillableObject.prototype.setType = function(value) {
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
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.billing.v1.BillableObjectBinding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.billing.v1.BillableObjectBinding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.toObject = function(includeInstance, msg) {
  var f, obj = {
    effectiveTime: (f = msg.getEffectiveTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    billableObject: (f = msg.getBillableObject()) && proto.yandex.cloud.billing.v1.BillableObject.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.billing.v1.BillableObjectBinding}
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.billing.v1.BillableObjectBinding;
  return proto.yandex.cloud.billing.v1.BillableObjectBinding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.billing.v1.BillableObjectBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.billing.v1.BillableObjectBinding}
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectiveTime(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.billing.v1.BillableObject;
      reader.readMessage(value,proto.yandex.cloud.billing.v1.BillableObject.deserializeBinaryFromReader);
      msg.setBillableObject(value);
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
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.billing.v1.BillableObjectBinding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.billing.v1.BillableObjectBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEffectiveTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBillableObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.billing.v1.BillableObject.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp effective_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.getEffectiveTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.billing.v1.BillableObjectBinding} returns this
*/
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.setEffectiveTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.billing.v1.BillableObjectBinding} returns this
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.clearEffectiveTime = function() {
  return this.setEffectiveTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.hasEffectiveTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BillableObject billable_object = 2;
 * @return {?proto.yandex.cloud.billing.v1.BillableObject}
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.getBillableObject = function() {
  return /** @type{?proto.yandex.cloud.billing.v1.BillableObject} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.billing.v1.BillableObject, 2));
};


/**
 * @param {?proto.yandex.cloud.billing.v1.BillableObject|undefined} value
 * @return {!proto.yandex.cloud.billing.v1.BillableObjectBinding} returns this
*/
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.setBillableObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.billing.v1.BillableObjectBinding} returns this
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.clearBillableObject = function() {
  return this.setBillableObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.billing.v1.BillableObjectBinding.prototype.hasBillableObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.yandex.cloud.billing.v1);
