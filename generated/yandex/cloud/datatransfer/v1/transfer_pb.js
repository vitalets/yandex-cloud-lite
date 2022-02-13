// source: yandex/cloud/datatransfer/v1/transfer.proto
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

var yandex_cloud_datatransfer_v1_endpoint_pb = require('../../../../yandex/cloud/datatransfer/v1/endpoint_pb.js');
goog.object.extend(proto, yandex_cloud_datatransfer_v1_endpoint_pb);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.Transfer', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.TransferStatus', null, global);
goog.exportSymbol('proto.yandex.cloud.datatransfer.v1.TransferType', null, global);
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
proto.yandex.cloud.datatransfer.v1.Transfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.datatransfer.v1.Transfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.datatransfer.v1.Transfer.displayName = 'proto.yandex.cloud.datatransfer.v1.Transfer';
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
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.datatransfer.v1.Transfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.datatransfer.v1.Transfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.Transfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    source: (f = msg.getSource()) && yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.toObject(includeInstance, f),
    target: (f = msg.getTarget()) && yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0),
    type: jspb.Message.getFieldWithDefault(msg, 12, 0),
    warning: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.datatransfer.v1.Transfer;
  return proto.yandex.cloud.datatransfer.v1.Transfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.datatransfer.v1.Transfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint;
      reader.readMessage(value,yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 8:
      var value = new yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint;
      reader.readMessage(value,yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 10:
      var value = /** @type {!proto.yandex.cloud.datatransfer.v1.TransferStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {!proto.yandex.cloud.datatransfer.v1.TransferType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarning(value);
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
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.datatransfer.v1.Transfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.datatransfer.v1.Transfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datatransfer.v1.Transfer.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getWarning();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Endpoint source = 7;
 * @return {?proto.yandex.cloud.datatransfer.v1.Endpoint}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getSource = function() {
  return /** @type{?proto.yandex.cloud.datatransfer.v1.Endpoint} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint, 7));
};


/**
 * @param {?proto.yandex.cloud.datatransfer.v1.Endpoint|undefined} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
*/
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.hasSource = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Endpoint target = 8;
 * @return {?proto.yandex.cloud.datatransfer.v1.Endpoint}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getTarget = function() {
  return /** @type{?proto.yandex.cloud.datatransfer.v1.Endpoint} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint, 8));
};


/**
 * @param {?proto.yandex.cloud.datatransfer.v1.Endpoint|undefined} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
*/
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TransferStatus status = 10;
 * @return {!proto.yandex.cloud.datatransfer.v1.TransferStatus}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.datatransfer.v1.TransferStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.yandex.cloud.datatransfer.v1.TransferStatus} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional TransferType type = 12;
 * @return {!proto.yandex.cloud.datatransfer.v1.TransferType}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.datatransfer.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.yandex.cloud.datatransfer.v1.TransferType} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string warning = 15;
 * @return {string}
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.getWarning = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datatransfer.v1.Transfer} returns this
 */
proto.yandex.cloud.datatransfer.v1.Transfer.prototype.setWarning = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * @enum {number}
 */
proto.yandex.cloud.datatransfer.v1.TransferType = {
  TRANSFER_TYPE_UNSPECIFIED: 0,
  SNAPSHOT_AND_INCREMENT: 1,
  SNAPSHOT_ONLY: 2,
  INCREMENT_ONLY: 3
};

/**
 * @enum {number}
 */
proto.yandex.cloud.datatransfer.v1.TransferStatus = {
  TRANSFER_STATUS_UNSPECIFIED: 0,
  CREATING: 1,
  CREATED: 2,
  RUNNING: 3,
  STOPPING: 4,
  STOPPED: 5,
  ERROR: 6,
  SNAPSHOTTING: 7,
  DONE: 8
};

goog.object.extend(exports, proto.yandex.cloud.datatransfer.v1);
