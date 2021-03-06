// source: yandex/cloud/certificatemanager/v1/certificate_content_service.proto
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
goog.exportSymbol('proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse', null, global);
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
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.displayName = 'proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse';
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
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.displayName = 'proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.repeatedFields_ = [3];



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
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    certificateId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    certificateChainList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    privateKey: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse;
  return proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCertificateId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCertificateChain(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateKey(value);
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
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCertificateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCertificateChainList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPrivateKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string certificate_id = 1;
 * @return {string}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.getCertificateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} returns this
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.setCertificateId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string certificate_chain = 3;
 * @return {!Array<string>}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.getCertificateChainList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} returns this
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.setCertificateChainList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} returns this
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.addCertificateChain = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} returns this
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.clearCertificateChainList = function() {
  return this.setCertificateChainList([]);
};


/**
 * optional string private_key = 4;
 * @return {string}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.getPrivateKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse} returns this
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentResponse.prototype.setPrivateKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    certificateId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest;
  return proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCertificateId(value);
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
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCertificateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string certificate_id = 1;
 * @return {string}
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.prototype.getCertificateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest} returns this
 */
proto.yandex.cloud.certificatemanager.v1.GetCertificateContentRequest.prototype.setCertificateId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.yandex.cloud.certificatemanager.v1);
