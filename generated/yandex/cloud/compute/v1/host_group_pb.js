// source: yandex/cloud/compute/v1/host_group.proto
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
goog.exportSymbol('proto.yandex.cloud.compute.v1.Host', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.Host.Status', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.HostGroup', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.HostGroup.Status', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.MaintenancePolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ScalePolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.ScalePolicy.ScaleTypeCase', null, global);
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
proto.yandex.cloud.compute.v1.HostGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.HostGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.HostGroup.displayName = 'proto.yandex.cloud.compute.v1.HostGroup';
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
proto.yandex.cloud.compute.v1.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.Host.displayName = 'proto.yandex.cloud.compute.v1.Host';
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
proto.yandex.cloud.compute.v1.ScalePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.ScalePolicy.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.ScalePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ScalePolicy.displayName = 'proto.yandex.cloud.compute.v1.ScalePolicy';
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
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.displayName = 'proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale';
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
proto.yandex.cloud.compute.v1.HostGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.HostGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.HostGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.HostGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    zoneId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0),
    typeId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    maintenancePolicy: jspb.Message.getFieldWithDefault(msg, 10, 0),
    scalePolicy: (f = msg.getScalePolicy()) && proto.yandex.cloud.compute.v1.ScalePolicy.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.HostGroup}
 */
proto.yandex.cloud.compute.v1.HostGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.HostGroup;
  return proto.yandex.cloud.compute.v1.HostGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.HostGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.HostGroup}
 */
proto.yandex.cloud.compute.v1.HostGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneId(value);
      break;
    case 8:
      var value = /** @type {!proto.yandex.cloud.compute.v1.HostGroup.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeId(value);
      break;
    case 10:
      var value = /** @type {!proto.yandex.cloud.compute.v1.MaintenancePolicy} */ (reader.readEnum());
      msg.setMaintenancePolicy(value);
      break;
    case 11:
      var value = new proto.yandex.cloud.compute.v1.ScalePolicy;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.ScalePolicy.deserializeBinaryFromReader);
      msg.setScalePolicy(value);
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
proto.yandex.cloud.compute.v1.HostGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.HostGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.HostGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.HostGroup.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getTypeId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMaintenancePolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getScalePolicy();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yandex.cloud.compute.v1.ScalePolicy.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.HostGroup.Status = {
  STATUS_UNSPECIFIED: 0,
  CREATING: 1,
  READY: 2,
  UPDATING: 3,
  DELETING: 4
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
*/
proto.yandex.cloud.compute.v1.HostGroup.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string zone_id = 7;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Status status = 8;
 * @return {!proto.yandex.cloud.compute.v1.HostGroup.Status}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.HostGroup.Status} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.HostGroup.Status} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string type_id = 9;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional MaintenancePolicy maintenance_policy = 10;
 * @return {!proto.yandex.cloud.compute.v1.MaintenancePolicy}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getMaintenancePolicy = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.MaintenancePolicy} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.MaintenancePolicy} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.setMaintenancePolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional ScalePolicy scale_policy = 11;
 * @return {?proto.yandex.cloud.compute.v1.ScalePolicy}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.getScalePolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.ScalePolicy} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.ScalePolicy, 11));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.ScalePolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
*/
proto.yandex.cloud.compute.v1.HostGroup.prototype.setScalePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.HostGroup} returns this
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.clearScalePolicy = function() {
  return this.setScalePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.HostGroup.prototype.hasScalePolicy = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.yandex.cloud.compute.v1.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    serverId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.compute.v1.Host}
 */
proto.yandex.cloud.compute.v1.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.Host;
  return proto.yandex.cloud.compute.v1.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.Host}
 */
proto.yandex.cloud.compute.v1.Host.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.compute.v1.Host.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerId(value);
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
proto.yandex.cloud.compute.v1.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.Host.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getServerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.Host.Status = {
  STATUS_UNSPECIFIED: 0,
  UP: 1,
  DOWN: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.Host.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.Host} returns this
 */
proto.yandex.cloud.compute.v1.Host.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.yandex.cloud.compute.v1.Host.Status}
 */
proto.yandex.cloud.compute.v1.Host.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.Host.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.Host.Status} value
 * @return {!proto.yandex.cloud.compute.v1.Host} returns this
 */
proto.yandex.cloud.compute.v1.Host.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string server_id = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.Host.prototype.getServerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.Host} returns this
 */
proto.yandex.cloud.compute.v1.Host.prototype.setServerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.compute.v1.ScalePolicy.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.ScaleTypeCase = {
  SCALE_TYPE_NOT_SET: 0,
  FIXED_SCALE: 1
};

/**
 * @return {proto.yandex.cloud.compute.v1.ScalePolicy.ScaleTypeCase}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.prototype.getScaleTypeCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.ScalePolicy.ScaleTypeCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.ScalePolicy.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.ScalePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ScalePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ScalePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ScalePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    fixedScale: (f = msg.getFixedScale()) && proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.ScalePolicy}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ScalePolicy;
  return proto.yandex.cloud.compute.v1.ScalePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ScalePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ScalePolicy}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.deserializeBinaryFromReader);
      msg.setFixedScale(value);
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
proto.yandex.cloud.compute.v1.ScalePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ScalePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ScalePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ScalePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFixedScale();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.serializeBinaryToWriter
    );
  }
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
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale;
  return proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 size = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale} returns this
 */
proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FixedScale fixed_scale = 1;
 * @return {?proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.prototype.getFixedScale = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale, 1));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.ScalePolicy.FixedScale|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.ScalePolicy} returns this
*/
proto.yandex.cloud.compute.v1.ScalePolicy.prototype.setFixedScale = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.compute.v1.ScalePolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.ScalePolicy} returns this
 */
proto.yandex.cloud.compute.v1.ScalePolicy.prototype.clearFixedScale = function() {
  return this.setFixedScale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.ScalePolicy.prototype.hasFixedScale = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.MaintenancePolicy = {
  MAINTENANCE_POLICY_UNSPECIFIED: 0,
  RESTART: 1,
  MIGRATE: 2
};

goog.object.extend(exports, proto.yandex.cloud.compute.v1);