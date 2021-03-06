// source: yandex/cloud/mdb/kafka/v1/user.proto
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
goog.exportSymbol('proto.yandex.cloud.mdb.kafka.v1.Permission', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.kafka.v1.Permission.AccessRole', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.kafka.v1.User', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.kafka.v1.UserSpec', null, global);
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
proto.yandex.cloud.mdb.kafka.v1.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.kafka.v1.User.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.kafka.v1.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.kafka.v1.User.displayName = 'proto.yandex.cloud.mdb.kafka.v1.User';
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
proto.yandex.cloud.mdb.kafka.v1.UserSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.kafka.v1.UserSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.kafka.v1.UserSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.kafka.v1.UserSpec.displayName = 'proto.yandex.cloud.mdb.kafka.v1.UserSpec';
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
proto.yandex.cloud.mdb.kafka.v1.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.kafka.v1.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.kafka.v1.Permission.displayName = 'proto.yandex.cloud.mdb.kafka.v1.Permission';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.kafka.v1.User.repeatedFields_ = [3];



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
proto.yandex.cloud.mdb.kafka.v1.User.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.kafka.v1.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.kafka.v1.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.kafka.v1.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.yandex.cloud.mdb.kafka.v1.Permission.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.kafka.v1.User}
 */
proto.yandex.cloud.mdb.kafka.v1.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.kafka.v1.User;
  return proto.yandex.cloud.mdb.kafka.v1.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.kafka.v1.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.kafka.v1.User}
 */
proto.yandex.cloud.mdb.kafka.v1.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.kafka.v1.Permission;
      reader.readMessage(value,proto.yandex.cloud.mdb.kafka.v1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.yandex.cloud.mdb.kafka.v1.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.kafka.v1.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.kafka.v1.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.kafka.v1.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yandex.cloud.mdb.kafka.v1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.kafka.v1.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.User} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.kafka.v1.User.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.User} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.User.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Permission permissions = 3;
 * @return {!Array<!proto.yandex.cloud.mdb.kafka.v1.Permission>}
 */
proto.yandex.cloud.mdb.kafka.v1.User.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.kafka.v1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.kafka.v1.Permission, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.kafka.v1.Permission>} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.User} returns this
*/
proto.yandex.cloud.mdb.kafka.v1.User.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.kafka.v1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.kafka.v1.Permission}
 */
proto.yandex.cloud.mdb.kafka.v1.User.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.mdb.kafka.v1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.kafka.v1.User} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.User.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.repeatedFields_ = [3];



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
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.kafka.v1.UserSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.kafka.v1.UserSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.yandex.cloud.mdb.kafka.v1.Permission.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.kafka.v1.UserSpec}
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.kafka.v1.UserSpec;
  return proto.yandex.cloud.mdb.kafka.v1.UserSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.kafka.v1.UserSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.kafka.v1.UserSpec}
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.kafka.v1.Permission;
      reader.readMessage(value,proto.yandex.cloud.mdb.kafka.v1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.kafka.v1.UserSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.kafka.v1.UserSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yandex.cloud.mdb.kafka.v1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.UserSpec} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.UserSpec} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Permission permissions = 3;
 * @return {!Array<!proto.yandex.cloud.mdb.kafka.v1.Permission>}
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.kafka.v1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.kafka.v1.Permission, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.kafka.v1.Permission>} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.UserSpec} returns this
*/
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.kafka.v1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.kafka.v1.Permission}
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.mdb.kafka.v1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.kafka.v1.UserSpec} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.UserSpec.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
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
proto.yandex.cloud.mdb.kafka.v1.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.kafka.v1.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.kafka.v1.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    role: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yandex.cloud.mdb.kafka.v1.Permission}
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.kafka.v1.Permission;
  return proto.yandex.cloud.mdb.kafka.v1.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.kafka.v1.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.kafka.v1.Permission}
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicName(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.mdb.kafka.v1.Permission.AccessRole} */ (reader.readEnum());
      msg.setRole(value);
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
proto.yandex.cloud.mdb.kafka.v1.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.kafka.v1.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.kafka.v1.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.AccessRole = {
  ACCESS_ROLE_UNSPECIFIED: 0,
  ACCESS_ROLE_PRODUCER: 1,
  ACCESS_ROLE_CONSUMER: 2,
  ACCESS_ROLE_ADMIN: 3
};

/**
 * optional string topic_name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.prototype.getTopicName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.Permission} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.prototype.setTopicName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AccessRole role = 2;
 * @return {!proto.yandex.cloud.mdb.kafka.v1.Permission.AccessRole}
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.prototype.getRole = function() {
  return /** @type {!proto.yandex.cloud.mdb.kafka.v1.Permission.AccessRole} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.kafka.v1.Permission.AccessRole} value
 * @return {!proto.yandex.cloud.mdb.kafka.v1.Permission} returns this
 */
proto.yandex.cloud.mdb.kafka.v1.Permission.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.yandex.cloud.mdb.kafka.v1);
