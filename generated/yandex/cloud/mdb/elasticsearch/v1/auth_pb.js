// source: yandex/cloud/mdb/elasticsearch/v1/auth.proto
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

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
goog.object.extend(proto, yandex_cloud_api_operation_pb);
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.SettingsCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.Type', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings', null, global);
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
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders';
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
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider';
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
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.toObject = function(includeInstance, msg) {
  var f, obj = {
    providersList: jspb.Message.toObjectList(msg.getProvidersList(),
    proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders;
  return proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.deserializeBinaryFromReader);
      msg.addProviders(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AuthProvider providers = 1;
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.prototype.getProvidersList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.prototype.setProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.prototype.addProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProviders.prototype.clearProvidersList = function() {
  return this.setProvidersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.oneofGroups_ = [[9]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.SettingsCase = {
  SETTINGS_NOT_SET: 0,
  SAML: 9
};

/**
 * @return {proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.SettingsCase}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getSettingsCase = function() {
  return /** @type {proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.SettingsCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    hidden: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    hint: jspb.Message.getFieldWithDefault(msg, 7, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 8, ""),
    saml: (f = msg.getSaml()) && proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider;
  return proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHidden(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHint(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.deserializeBinaryFromReader);
      msg.setSaml(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHidden();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHint();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSaml();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.Type = {
  TYPE_UNSPECIFIED: 0,
  NATIVE: 1,
  SAML: 2
};

/**
 * optional Type type = 1;
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.Type}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.Type} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 order = 3;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool enabled = 4;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool hidden = 5;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getHidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setHidden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string hint = 7;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getHint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setHint = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string icon = 8;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional SamlSettings saml = 9;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.getSaml = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings, 9));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.setSaml = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.clearSaml = function() {
  return this.setSaml(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AuthProvider.prototype.hasSaml = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    idpEntityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    idpMetadataFile: msg.getIdpMetadataFile_asB64(),
    spEntityId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kibanaUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    attributePrincipal: jspb.Message.getFieldWithDefault(msg, 5, ""),
    attributeGroups: jspb.Message.getFieldWithDefault(msg, 6, ""),
    attributeName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    attributeEmail: jspb.Message.getFieldWithDefault(msg, 8, ""),
    attributeDn: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings;
  return proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpEntityId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIdpMetadataFile(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpEntityId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKibanaUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributePrincipal(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributeGroups(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributeName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributeEmail(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributeDn(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdpEntityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdpMetadataFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSpEntityId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKibanaUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAttributePrincipal();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAttributeGroups();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAttributeName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAttributeEmail();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAttributeDn();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string idp_entity_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getIdpEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setIdpEntityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes idp_metadata_file = 2;
 * @return {!(string|Uint8Array)}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getIdpMetadataFile = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes idp_metadata_file = 2;
 * This is a type-conversion wrapper around `getIdpMetadataFile()`
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getIdpMetadataFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIdpMetadataFile()));
};


/**
 * optional bytes idp_metadata_file = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIdpMetadataFile()`
 * @return {!Uint8Array}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getIdpMetadataFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIdpMetadataFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setIdpMetadataFile = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string sp_entity_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getSpEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setSpEntityId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string kibana_url = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getKibanaUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setKibanaUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string attribute_principal = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getAttributePrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setAttributePrincipal = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string attribute_groups = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getAttributeGroups = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setAttributeGroups = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string attribute_name = 7;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getAttributeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setAttributeName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string attribute_email = 8;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getAttributeEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setAttributeEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string attribute_dn = 9;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.getAttributeDn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.SamlSettings.prototype.setAttributeDn = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.yandex.cloud.mdb.elasticsearch.v1);
