// source: yandex/cloud/operation/operation_service.proto
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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var yandex_cloud_operation_operation_pb = require('../../../yandex/cloud/operation/operation_pb.js');
goog.object.extend(proto, yandex_cloud_operation_operation_pb);
var yandex_cloud_validation_pb = require('../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.operation.CancelOperationRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.operation.GetOperationRequest', null, global);
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
proto.yandex.cloud.operation.GetOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.operation.GetOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.operation.GetOperationRequest.displayName = 'proto.yandex.cloud.operation.GetOperationRequest';
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
proto.yandex.cloud.operation.CancelOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.operation.CancelOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.operation.CancelOperationRequest.displayName = 'proto.yandex.cloud.operation.CancelOperationRequest';
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
proto.yandex.cloud.operation.GetOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.operation.GetOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.operation.GetOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.operation.GetOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.operation.GetOperationRequest}
 */
proto.yandex.cloud.operation.GetOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.operation.GetOperationRequest;
  return proto.yandex.cloud.operation.GetOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.operation.GetOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.operation.GetOperationRequest}
 */
proto.yandex.cloud.operation.GetOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
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
proto.yandex.cloud.operation.GetOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.operation.GetOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.operation.GetOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.operation.GetOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.yandex.cloud.operation.GetOperationRequest.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.operation.GetOperationRequest} returns this
 */
proto.yandex.cloud.operation.GetOperationRequest.prototype.setOperationId = function(value) {
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
proto.yandex.cloud.operation.CancelOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.operation.CancelOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.operation.CancelOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.operation.CancelOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.operation.CancelOperationRequest}
 */
proto.yandex.cloud.operation.CancelOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.operation.CancelOperationRequest;
  return proto.yandex.cloud.operation.CancelOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.operation.CancelOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.operation.CancelOperationRequest}
 */
proto.yandex.cloud.operation.CancelOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
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
proto.yandex.cloud.operation.CancelOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.operation.CancelOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.operation.CancelOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.operation.CancelOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.yandex.cloud.operation.CancelOperationRequest.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.operation.CancelOperationRequest} returns this
 */
proto.yandex.cloud.operation.CancelOperationRequest.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.yandex.cloud.operation);
