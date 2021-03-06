// source: yandex/cloud/logging/v1/log_ingestion_service.proto
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

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var yandex_cloud_logging_v1_log_entry_pb = require('../../../../yandex/cloud/logging/v1/log_entry_pb.js');
goog.object.extend(proto, yandex_cloud_logging_v1_log_entry_pb);
var yandex_cloud_logging_v1_log_resource_pb = require('../../../../yandex/cloud/logging/v1/log_resource_pb.js');
goog.object.extend(proto, yandex_cloud_logging_v1_log_resource_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.logging.v1.WriteRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.logging.v1.WriteResponse', null, global);
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
proto.yandex.cloud.logging.v1.WriteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.logging.v1.WriteRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.logging.v1.WriteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.logging.v1.WriteRequest.displayName = 'proto.yandex.cloud.logging.v1.WriteRequest';
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
proto.yandex.cloud.logging.v1.WriteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.logging.v1.WriteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.logging.v1.WriteResponse.displayName = 'proto.yandex.cloud.logging.v1.WriteResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.logging.v1.WriteRequest.repeatedFields_ = [3];



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
proto.yandex.cloud.logging.v1.WriteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.logging.v1.WriteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.logging.v1.WriteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.WriteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    destination: (f = msg.getDestination()) && yandex_cloud_logging_v1_log_entry_pb.Destination.toObject(includeInstance, f),
    resource: (f = msg.getResource()) && yandex_cloud_logging_v1_log_resource_pb.LogEntryResource.toObject(includeInstance, f),
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry.toObject, includeInstance),
    defaults: (f = msg.getDefaults()) && yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest}
 */
proto.yandex.cloud.logging.v1.WriteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.logging.v1.WriteRequest;
  return proto.yandex.cloud.logging.v1.WriteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.logging.v1.WriteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest}
 */
proto.yandex.cloud.logging.v1.WriteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_logging_v1_log_entry_pb.Destination;
      reader.readMessage(value,yandex_cloud_logging_v1_log_entry_pb.Destination.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    case 2:
      var value = new yandex_cloud_logging_v1_log_resource_pb.LogEntryResource;
      reader.readMessage(value,yandex_cloud_logging_v1_log_resource_pb.LogEntryResource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 3:
      var value = new yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry;
      reader.readMessage(value,yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 4:
      var value = new yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults;
      reader.readMessage(value,yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults.deserializeBinaryFromReader);
      msg.setDefaults(value);
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
proto.yandex.cloud.logging.v1.WriteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.logging.v1.WriteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.logging.v1.WriteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.WriteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_logging_v1_log_entry_pb.Destination.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_logging_v1_log_resource_pb.LogEntryResource.serializeBinaryToWriter
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry.serializeBinaryToWriter
    );
  }
  f = message.getDefaults();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults.serializeBinaryToWriter
    );
  }
};


/**
 * optional Destination destination = 1;
 * @return {?proto.yandex.cloud.logging.v1.Destination}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.getDestination = function() {
  return /** @type{?proto.yandex.cloud.logging.v1.Destination} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_logging_v1_log_entry_pb.Destination, 1));
};


/**
 * @param {?proto.yandex.cloud.logging.v1.Destination|undefined} value
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
*/
proto.yandex.cloud.logging.v1.WriteRequest.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LogEntryResource resource = 2;
 * @return {?proto.yandex.cloud.logging.v1.LogEntryResource}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.getResource = function() {
  return /** @type{?proto.yandex.cloud.logging.v1.LogEntryResource} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_logging_v1_log_resource_pb.LogEntryResource, 2));
};


/**
 * @param {?proto.yandex.cloud.logging.v1.LogEntryResource|undefined} value
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
*/
proto.yandex.cloud.logging.v1.WriteRequest.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.hasResource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated IncomingLogEntry entries = 3;
 * @return {!Array<!proto.yandex.cloud.logging.v1.IncomingLogEntry>}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.logging.v1.IncomingLogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.logging.v1.IncomingLogEntry>} value
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
*/
proto.yandex.cloud.logging.v1.WriteRequest.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.logging.v1.IncomingLogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.logging.v1.IncomingLogEntry}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.logging.v1.IncomingLogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * optional LogEntryDefaults defaults = 4;
 * @return {?proto.yandex.cloud.logging.v1.LogEntryDefaults}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.getDefaults = function() {
  return /** @type{?proto.yandex.cloud.logging.v1.LogEntryDefaults} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults, 4));
};


/**
 * @param {?proto.yandex.cloud.logging.v1.LogEntryDefaults|undefined} value
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
*/
proto.yandex.cloud.logging.v1.WriteRequest.prototype.setDefaults = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.logging.v1.WriteRequest} returns this
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.clearDefaults = function() {
  return this.setDefaults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.logging.v1.WriteRequest.prototype.hasDefaults = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.logging.v1.WriteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.logging.v1.WriteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.logging.v1.WriteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.WriteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsMap: (f = msg.getErrorsMap()) ? f.toObject(includeInstance, proto.google.rpc.Status.toObject) : []
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
 * @return {!proto.yandex.cloud.logging.v1.WriteResponse}
 */
proto.yandex.cloud.logging.v1.WriteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.logging.v1.WriteResponse;
  return proto.yandex.cloud.logging.v1.WriteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.logging.v1.WriteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.logging.v1.WriteResponse}
 */
proto.yandex.cloud.logging.v1.WriteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getErrorsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt64, jspb.BinaryReader.prototype.readMessage, proto.google.rpc.Status.deserializeBinaryFromReader, 0, new proto.google.rpc.Status());
         });
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
proto.yandex.cloud.logging.v1.WriteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.logging.v1.WriteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.logging.v1.WriteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.logging.v1.WriteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt64, jspb.BinaryWriter.prototype.writeMessage, proto.google.rpc.Status.serializeBinaryToWriter);
  }
};


/**
 * map<int64, google.rpc.Status> errors = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.google.rpc.Status>}
 */
proto.yandex.cloud.logging.v1.WriteResponse.prototype.getErrorsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.google.rpc.Status>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.google.rpc.Status));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.logging.v1.WriteResponse} returns this
 */
proto.yandex.cloud.logging.v1.WriteResponse.prototype.clearErrorsMap = function() {
  this.getErrorsMap().clear();
  return this;};


goog.object.extend(exports, proto.yandex.cloud.logging.v1);
