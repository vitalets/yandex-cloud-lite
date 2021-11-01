// source: yandex/cloud/cdn/v1/origin_group.proto
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

var yandex_cloud_cdn_v1_origin_pb = require('../../../../yandex/cloud/cdn/v1/origin_pb.js');
goog.object.extend(proto, yandex_cloud_cdn_v1_origin_pb);
goog.exportSymbol('proto.yandex.cloud.cdn.v1.OriginGroup', null, global);
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
proto.yandex.cloud.cdn.v1.OriginGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.cdn.v1.OriginGroup.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.cdn.v1.OriginGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.cdn.v1.OriginGroup.displayName = 'proto.yandex.cloud.cdn.v1.OriginGroup';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.cdn.v1.OriginGroup.repeatedFields_ = [5];



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
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.cdn.v1.OriginGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.cdn.v1.OriginGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useNext: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    originsList: jspb.Message.toObjectList(msg.getOriginsList(),
    yandex_cloud_cdn_v1_origin_pb.Origin.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.cdn.v1.OriginGroup;
  return proto.yandex.cloud.cdn.v1.OriginGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.cdn.v1.OriginGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseNext(value);
      break;
    case 5:
      var value = new yandex_cloud_cdn_v1_origin_pb.Origin;
      reader.readMessage(value,yandex_cloud_cdn_v1_origin_pb.Origin.deserializeBinaryFromReader);
      msg.addOrigins(value);
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
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.cdn.v1.OriginGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.cdn.v1.OriginGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.cdn.v1.OriginGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      2,
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
  f = message.getUseNext();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOriginsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      yandex_cloud_cdn_v1_origin_pb.Origin.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup} returns this
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup} returns this
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup} returns this
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_next = 4;
 * @return {boolean}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.getUseNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup} returns this
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.setUseNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Origin origins = 5;
 * @return {!Array<!proto.yandex.cloud.cdn.v1.Origin>}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.getOriginsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.cdn.v1.Origin>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_cdn_v1_origin_pb.Origin, 5));
};


/**
 * @param {!Array<!proto.yandex.cloud.cdn.v1.Origin>} value
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup} returns this
*/
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.setOriginsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.yandex.cloud.cdn.v1.Origin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.cdn.v1.Origin}
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.addOrigins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.yandex.cloud.cdn.v1.Origin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.cdn.v1.OriginGroup} returns this
 */
proto.yandex.cloud.cdn.v1.OriginGroup.prototype.clearOriginsList = function() {
  return this.setOriginsList([]);
};


goog.object.extend(exports, proto.yandex.cloud.cdn.v1);