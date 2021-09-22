// source: yandex/cloud/compute/v1/host_type_service.proto
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
var yandex_cloud_compute_v1_host_type_pb = require('../../../../yandex/cloud/compute/v1/host_type_pb.js');
goog.object.extend(proto, yandex_cloud_compute_v1_host_type_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.compute.v1.GetHostTypeRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ListHostTypesRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ListHostTypesResponse', null, global);
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
proto.yandex.cloud.compute.v1.GetHostTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.GetHostTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.GetHostTypeRequest.displayName = 'proto.yandex.cloud.compute.v1.GetHostTypeRequest';
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
proto.yandex.cloud.compute.v1.ListHostTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ListHostTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ListHostTypesRequest.displayName = 'proto.yandex.cloud.compute.v1.ListHostTypesRequest';
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
proto.yandex.cloud.compute.v1.ListHostTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.ListHostTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ListHostTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ListHostTypesResponse.displayName = 'proto.yandex.cloud.compute.v1.ListHostTypesResponse';
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
proto.yandex.cloud.compute.v1.GetHostTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.GetHostTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.GetHostTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetHostTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostTypeId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.GetHostTypeRequest}
 */
proto.yandex.cloud.compute.v1.GetHostTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.GetHostTypeRequest;
  return proto.yandex.cloud.compute.v1.GetHostTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.GetHostTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.GetHostTypeRequest}
 */
proto.yandex.cloud.compute.v1.GetHostTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostTypeId(value);
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
proto.yandex.cloud.compute.v1.GetHostTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.GetHostTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.GetHostTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.GetHostTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostTypeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string host_type_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.GetHostTypeRequest.prototype.getHostTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.GetHostTypeRequest} returns this
 */
proto.yandex.cloud.compute.v1.GetHostTypeRequest.prototype.setHostTypeId = function(value) {
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
proto.yandex.cloud.compute.v1.ListHostTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ListHostTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ListHostTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListHostTypesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesRequest}
 */
proto.yandex.cloud.compute.v1.ListHostTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ListHostTypesRequest;
  return proto.yandex.cloud.compute.v1.ListHostTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ListHostTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesRequest}
 */
proto.yandex.cloud.compute.v1.ListHostTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.compute.v1.ListHostTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ListHostTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ListHostTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListHostTypesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.compute.v1.ListHostTypesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListHostTypesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListHostTypesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesRequest} returns this
 */
proto.yandex.cloud.compute.v1.ListHostTypesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ListHostTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ListHostTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostTypesList: jspb.Message.toObjectList(msg.getHostTypesList(),
    yandex_cloud_compute_v1_host_type_pb.HostType.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesResponse}
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ListHostTypesResponse;
  return proto.yandex.cloud.compute.v1.ListHostTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ListHostTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesResponse}
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_compute_v1_host_type_pb.HostType;
      reader.readMessage(value,yandex_cloud_compute_v1_host_type_pb.HostType.deserializeBinaryFromReader);
      msg.addHostTypes(value);
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
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ListHostTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ListHostTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_compute_v1_host_type_pb.HostType.serializeBinaryToWriter
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
 * repeated HostType host_types = 1;
 * @return {!Array<!proto.yandex.cloud.compute.v1.HostType>}
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.getHostTypesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.HostType>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_compute_v1_host_type_pb.HostType, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.HostType>} value
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesResponse} returns this
*/
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.setHostTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.HostType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.HostType}
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.addHostTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.compute.v1.HostType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesResponse} returns this
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.clearHostTypesList = function() {
  return this.setHostTypesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.ListHostTypesResponse} returns this
 */
proto.yandex.cloud.compute.v1.ListHostTypesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.yandex.cloud.compute.v1);
