// source: yandex/cloud/k8s/v1/version.proto
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

var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.UpdateVersionSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.UpdateVersionSpec.SpecifierCase', null, global);
goog.exportSymbol('proto.yandex.cloud.k8s.v1.VersionInfo', null, global);
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
proto.yandex.cloud.k8s.v1.VersionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.k8s.v1.VersionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.k8s.v1.VersionInfo.displayName = 'proto.yandex.cloud.k8s.v1.VersionInfo';
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
proto.yandex.cloud.k8s.v1.UpdateVersionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.k8s.v1.UpdateVersionSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.k8s.v1.UpdateVersionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.k8s.v1.UpdateVersionSpec.displayName = 'proto.yandex.cloud.k8s.v1.UpdateVersionSpec';
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
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.k8s.v1.VersionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.k8s.v1.VersionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.VersionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newRevisionAvailable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    newRevisionSummary: jspb.Message.getFieldWithDefault(msg, 3, ""),
    versionDeprecated: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.yandex.cloud.k8s.v1.VersionInfo}
 */
proto.yandex.cloud.k8s.v1.VersionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.k8s.v1.VersionInfo;
  return proto.yandex.cloud.k8s.v1.VersionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.k8s.v1.VersionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.k8s.v1.VersionInfo}
 */
proto.yandex.cloud.k8s.v1.VersionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentVersion(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNewRevisionAvailable(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewRevisionSummary(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVersionDeprecated(value);
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
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.k8s.v1.VersionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.k8s.v1.VersionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.VersionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewRevisionAvailable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getNewRevisionSummary();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersionDeprecated();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string current_version = 1;
 * @return {string}
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.getCurrentVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.k8s.v1.VersionInfo} returns this
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.setCurrentVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool new_revision_available = 2;
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.getNewRevisionAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.k8s.v1.VersionInfo} returns this
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.setNewRevisionAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string new_revision_summary = 3;
 * @return {string}
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.getNewRevisionSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.k8s.v1.VersionInfo} returns this
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.setNewRevisionSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool version_deprecated = 4;
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.getVersionDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.k8s.v1.VersionInfo} returns this
 */
proto.yandex.cloud.k8s.v1.VersionInfo.prototype.setVersionDeprecated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.SpecifierCase = {
  SPECIFIER_NOT_SET: 0,
  VERSION: 1,
  LATEST_REVISION: 2
};

/**
 * @return {proto.yandex.cloud.k8s.v1.UpdateVersionSpec.SpecifierCase}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.getSpecifierCase = function() {
  return /** @type {proto.yandex.cloud.k8s.v1.UpdateVersionSpec.SpecifierCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.k8s.v1.UpdateVersionSpec.oneofGroups_[0]));
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
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.k8s.v1.UpdateVersionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    latestRevision: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.k8s.v1.UpdateVersionSpec;
  return proto.yandex.cloud.k8s.v1.UpdateVersionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLatestRevision(value);
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
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.k8s.v1.UpdateVersionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec} returns this
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.setVersion = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.k8s.v1.UpdateVersionSpec.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec} returns this
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.clearVersion = function() {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.k8s.v1.UpdateVersionSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool latest_revision = 2;
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.getLatestRevision = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec} returns this
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.setLatestRevision = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.k8s.v1.UpdateVersionSpec.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.k8s.v1.UpdateVersionSpec} returns this
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.clearLatestRevision = function() {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.k8s.v1.UpdateVersionSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.k8s.v1.UpdateVersionSpec.prototype.hasLatestRevision = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.yandex.cloud.k8s.v1);