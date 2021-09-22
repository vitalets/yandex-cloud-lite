// source: yandex/cloud/compute/v1/snapshot.proto
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
goog.exportSymbol('proto.yandex.cloud.compute.v1.Snapshot', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.Snapshot.Status', null, global);
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
proto.yandex.cloud.compute.v1.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.Snapshot.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.Snapshot.displayName = 'proto.yandex.cloud.compute.v1.Snapshot';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.Snapshot.repeatedFields_ = [9];



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
proto.yandex.cloud.compute.v1.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.Snapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    storageSize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    diskSize: jspb.Message.getFieldWithDefault(msg, 8, 0),
    productIdsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    status: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sourceDiskId: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.yandex.cloud.compute.v1.Snapshot}
 */
proto.yandex.cloud.compute.v1.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.Snapshot;
  return proto.yandex.cloud.compute.v1.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.Snapshot}
 */
proto.yandex.cloud.compute.v1.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStorageSize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiskSize(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addProductIds(value);
      break;
    case 10:
      var value = /** @type {!proto.yandex.cloud.compute.v1.Snapshot.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceDiskId(value);
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
proto.yandex.cloud.compute.v1.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.Snapshot.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getStorageSize();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getDiskSize();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getProductIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getSourceDiskId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.Snapshot.Status = {
  STATUS_UNSPECIFIED: 0,
  CREATING: 1,
  READY: 2,
  ERROR: 3,
  DELETING: 4
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
*/
proto.yandex.cloud.compute.v1.Snapshot.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional int64 storage_size = 7;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getStorageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setStorageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 disk_size = 8;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getDiskSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setDiskSize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated string product_ids = 9;
 * @return {!Array<string>}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getProductIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setProductIdsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.addProductIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.clearProductIdsList = function() {
  return this.setProductIdsList([]);
};


/**
 * optional Status status = 10;
 * @return {!proto.yandex.cloud.compute.v1.Snapshot.Status}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.Snapshot.Status} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.Snapshot.Status} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string source_disk_id = 11;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.getSourceDiskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.Snapshot} returns this
 */
proto.yandex.cloud.compute.v1.Snapshot.prototype.setSourceDiskId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


goog.object.extend(exports, proto.yandex.cloud.compute.v1);
