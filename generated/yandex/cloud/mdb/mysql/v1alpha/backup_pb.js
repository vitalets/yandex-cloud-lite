// source: yandex/cloud/mdb/mysql/v1alpha/backup.proto
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

var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.mysql.v1alpha.Backup', null, global);
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
proto.yandex.cloud.mdb.mysql.v1alpha.Backup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mysql.v1alpha.Backup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mysql.v1alpha.Backup.displayName = 'proto.yandex.cloud.mdb.mysql.v1alpha.Backup';
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
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mysql.v1alpha.Backup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sourceClusterId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mysql.v1alpha.Backup;
  return proto.yandex.cloud.mdb.mysql.v1alpha.Backup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFolderId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceClusterId(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
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
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mysql.v1alpha.Backup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSourceClusterId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} returns this
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} returns this
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} returns this
*/
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} returns this
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string source_cluster_id = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.getSourceClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} returns this
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.setSourceClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp started_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} returns this
*/
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mysql.v1alpha.Backup} returns this
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mysql.v1alpha.Backup.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.yandex.cloud.mdb.mysql.v1alpha);
