// source: yandex/cloud/api/operation.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.yandex.cloud.api.Operation', null, global);
goog.exportSymbol('proto.yandex.cloud.api.operation', null, global);
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
proto.yandex.cloud.api.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.api.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.api.Operation.displayName = 'proto.yandex.cloud.api.Operation';
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
proto.yandex.cloud.api.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.api.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.api.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.api.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.api.Operation}
 */
proto.yandex.cloud.api.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.api.Operation;
  return proto.yandex.cloud.api.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.api.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.api.Operation}
 */
proto.yandex.cloud.api.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponse(value);
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
proto.yandex.cloud.api.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.api.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.api.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.api.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string metadata = 1;
 * @return {string}
 */
proto.yandex.cloud.api.Operation.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.api.Operation} returns this
 */
proto.yandex.cloud.api.Operation.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string response = 2;
 * @return {string}
 */
proto.yandex.cloud.api.Operation.prototype.getResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.api.Operation} returns this
 */
proto.yandex.cloud.api.Operation.prototype.setResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `operation`.
 * @type {!jspb.ExtensionFieldInfo<!proto.yandex.cloud.api.Operation>}
 */
proto.yandex.cloud.api.operation = new jspb.ExtensionFieldInfo(
    87334,
    {operation: 0},
    proto.yandex.cloud.api.Operation,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.yandex.cloud.api.Operation.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[87334] = new jspb.ExtensionFieldBinaryInfo(
    proto.yandex.cloud.api.operation,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.yandex.cloud.api.Operation.serializeBinaryToWriter,
    proto.yandex.cloud.api.Operation.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[87334] = proto.yandex.cloud.api.operation;

goog.object.extend(exports, proto.yandex.cloud.api);