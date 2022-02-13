// source: yandex/cloud/datasphere/v1/folder_budget_service.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest', null, global);
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
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.displayName = 'proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest';
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
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.displayName = 'proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse';
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
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.displayName = 'proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest';
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
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest;
  return proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
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
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest} returns this
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetRequest.prototype.setFolderId = function(value) {
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
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unitBalance: (f = msg.getUnitBalance()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    maxUnitsPerHour: (f = msg.getMaxUnitsPerHour()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    maxUnitsPerExecution: (f = msg.getMaxUnitsPerExecution()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse;
  return proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setUnitBalance(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMaxUnitsPerHour(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMaxUnitsPerExecution(value);
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
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnitBalance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxUnitsPerHour();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxUnitsPerExecution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value unit_balance = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.getUnitBalance = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} returns this
*/
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.setUnitBalance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} returns this
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.clearUnitBalance = function() {
  return this.setUnitBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.hasUnitBalance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int64Value max_units_per_hour = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.getMaxUnitsPerHour = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} returns this
*/
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.setMaxUnitsPerHour = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} returns this
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.clearMaxUnitsPerHour = function() {
  return this.setMaxUnitsPerHour(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.hasMaxUnitsPerHour = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value max_units_per_execution = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.getMaxUnitsPerExecution = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} returns this
*/
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.setMaxUnitsPerExecution = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse} returns this
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.clearMaxUnitsPerExecution = function() {
  return this.setMaxUnitsPerExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datasphere.v1.GetFolderBudgetResponse.prototype.hasMaxUnitsPerExecution = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    setMask: (f = msg.getSetMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    unitBalance: (f = msg.getUnitBalance()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    maxUnitsPerHour: (f = msg.getMaxUnitsPerHour()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    maxUnitsPerExecution: (f = msg.getMaxUnitsPerExecution()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest;
  return proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setSetMask(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setUnitBalance(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMaxUnitsPerHour(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMaxUnitsPerExecution(value);
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
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSetMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getUnitBalance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxUnitsPerHour();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxUnitsPerExecution();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask set_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.getSetMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
*/
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.setSetMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.clearSetMask = function() {
  return this.setSetMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.hasSetMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value unit_balance = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.getUnitBalance = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
*/
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.setUnitBalance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.clearUnitBalance = function() {
  return this.setUnitBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.hasUnitBalance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int64Value max_units_per_hour = 4;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.getMaxUnitsPerHour = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
*/
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.setMaxUnitsPerHour = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.clearMaxUnitsPerHour = function() {
  return this.setMaxUnitsPerHour(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.hasMaxUnitsPerHour = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int64Value max_units_per_execution = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.getMaxUnitsPerExecution = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
*/
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.setMaxUnitsPerExecution = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest} returns this
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.clearMaxUnitsPerExecution = function() {
  return this.setMaxUnitsPerExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.datasphere.v1.SetFolderBudgetRequest.prototype.hasMaxUnitsPerExecution = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.yandex.cloud.datasphere.v1);
