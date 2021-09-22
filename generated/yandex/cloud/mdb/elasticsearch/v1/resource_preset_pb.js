// source: yandex/cloud/mdb/elasticsearch/v1/resource_preset.proto
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

goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset', null, global);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zoneIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    cores: jspb.Message.getFieldWithDefault(msg, 3, 0),
    memory: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addZoneIds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCores(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemory(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZoneIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCores();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMemory();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string zone_ids = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.getZoneIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.setZoneIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.addZoneIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.clearZoneIdsList = function() {
  return this.setZoneIdsList([]);
};


/**
 * optional int64 cores = 3;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.getCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.setCores = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 memory = 4;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.getMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ResourcePreset.prototype.setMemory = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.yandex.cloud.mdb.elasticsearch.v1);
