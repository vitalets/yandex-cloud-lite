// source: yandex/cloud/ai/vision/v1/primitives.proto
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

goog.exportSymbol('proto.yandex.cloud.ai.vision.v1.Polygon', null, global);
goog.exportSymbol('proto.yandex.cloud.ai.vision.v1.Vertex', null, global);
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
proto.yandex.cloud.ai.vision.v1.Polygon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.ai.vision.v1.Polygon.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.ai.vision.v1.Polygon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.ai.vision.v1.Polygon.displayName = 'proto.yandex.cloud.ai.vision.v1.Polygon';
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
proto.yandex.cloud.ai.vision.v1.Vertex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.ai.vision.v1.Vertex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.ai.vision.v1.Vertex.displayName = 'proto.yandex.cloud.ai.vision.v1.Vertex';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.ai.vision.v1.Polygon.repeatedFields_ = [1];



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
proto.yandex.cloud.ai.vision.v1.Polygon.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.ai.vision.v1.Polygon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.ai.vision.v1.Polygon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ai.vision.v1.Polygon.toObject = function(includeInstance, msg) {
  var f, obj = {
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    proto.yandex.cloud.ai.vision.v1.Vertex.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.ai.vision.v1.Polygon}
 */
proto.yandex.cloud.ai.vision.v1.Polygon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.ai.vision.v1.Polygon;
  return proto.yandex.cloud.ai.vision.v1.Polygon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.ai.vision.v1.Polygon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.ai.vision.v1.Polygon}
 */
proto.yandex.cloud.ai.vision.v1.Polygon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.ai.vision.v1.Vertex;
      reader.readMessage(value,proto.yandex.cloud.ai.vision.v1.Vertex.deserializeBinaryFromReader);
      msg.addVertices(value);
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
proto.yandex.cloud.ai.vision.v1.Polygon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.ai.vision.v1.Polygon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.ai.vision.v1.Polygon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ai.vision.v1.Polygon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.ai.vision.v1.Vertex.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Vertex vertices = 1;
 * @return {!Array<!proto.yandex.cloud.ai.vision.v1.Vertex>}
 */
proto.yandex.cloud.ai.vision.v1.Polygon.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.ai.vision.v1.Vertex>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.ai.vision.v1.Vertex, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.ai.vision.v1.Vertex>} value
 * @return {!proto.yandex.cloud.ai.vision.v1.Polygon} returns this
*/
proto.yandex.cloud.ai.vision.v1.Polygon.prototype.setVerticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.ai.vision.v1.Vertex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.ai.vision.v1.Vertex}
 */
proto.yandex.cloud.ai.vision.v1.Polygon.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.ai.vision.v1.Vertex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.ai.vision.v1.Polygon} returns this
 */
proto.yandex.cloud.ai.vision.v1.Polygon.prototype.clearVerticesList = function() {
  return this.setVerticesList([]);
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
proto.yandex.cloud.ai.vision.v1.Vertex.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.ai.vision.v1.Vertex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.ai.vision.v1.Vertex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ai.vision.v1.Vertex.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yandex.cloud.ai.vision.v1.Vertex}
 */
proto.yandex.cloud.ai.vision.v1.Vertex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.ai.vision.v1.Vertex;
  return proto.yandex.cloud.ai.vision.v1.Vertex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.ai.vision.v1.Vertex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.ai.vision.v1.Vertex}
 */
proto.yandex.cloud.ai.vision.v1.Vertex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setY(value);
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
proto.yandex.cloud.ai.vision.v1.Vertex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.ai.vision.v1.Vertex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.ai.vision.v1.Vertex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ai.vision.v1.Vertex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 x = 1;
 * @return {number}
 */
proto.yandex.cloud.ai.vision.v1.Vertex.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.ai.vision.v1.Vertex} returns this
 */
proto.yandex.cloud.ai.vision.v1.Vertex.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 y = 2;
 * @return {number}
 */
proto.yandex.cloud.ai.vision.v1.Vertex.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.ai.vision.v1.Vertex} returns this
 */
proto.yandex.cloud.ai.vision.v1.Vertex.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.yandex.cloud.ai.vision.v1);
