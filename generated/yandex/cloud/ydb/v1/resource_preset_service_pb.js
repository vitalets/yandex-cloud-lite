// source: yandex/cloud/ydb/v1/resource_preset_service.proto
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
var yandex_cloud_ydb_v1_resource_preset_pb = require('../../../../yandex/cloud/ydb/v1/resource_preset_pb.js');
goog.object.extend(proto, yandex_cloud_ydb_v1_resource_preset_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.ydb.v1.GetResourcePresetRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse', null, global);
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
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.ydb.v1.GetResourcePresetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.displayName = 'proto.yandex.cloud.ydb.v1.GetResourcePresetRequest';
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
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.displayName = 'proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest';
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
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.displayName = 'proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse';
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
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.ydb.v1.GetResourcePresetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcePresetId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.ydb.v1.GetResourcePresetRequest}
 */
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.ydb.v1.GetResourcePresetRequest;
  return proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.ydb.v1.GetResourcePresetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.ydb.v1.GetResourcePresetRequest}
 */
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourcePresetId(value);
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
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.ydb.v1.GetResourcePresetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcePresetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_preset_id = 1;
 * @return {string}
 */
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.prototype.getResourcePresetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.ydb.v1.GetResourcePresetRequest} returns this
 */
proto.yandex.cloud.ydb.v1.GetResourcePresetRequest.prototype.setResourcePresetId = function(value) {
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
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest;
  return proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 page_size = 1;
 * @return {number}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest} returns this
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest} returns this
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcePresetsList: jspb.Message.toObjectList(msg.getResourcePresetsList(),
    yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse;
  return proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset;
      reader.readMessage(value,yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset.deserializeBinaryFromReader);
      msg.addResourcePresets(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcePresetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ResourcePreset resource_presets = 1;
 * @return {!Array<!proto.yandex.cloud.ydb.v1.ResourcePreset>}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.getResourcePresetsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.ydb.v1.ResourcePreset>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.ydb.v1.ResourcePreset>} value
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse} returns this
*/
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.setResourcePresetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.ydb.v1.ResourcePreset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.ydb.v1.ResourcePreset}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.addResourcePresets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.ydb.v1.ResourcePreset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse} returns this
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.clearResourcePresetsList = function() {
  return this.setResourcePresetsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse} returns this
 */
proto.yandex.cloud.ydb.v1.ListResourcePresetsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.yandex.cloud.ydb.v1);
