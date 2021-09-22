// source: yandex/cloud/dns/v1/dns_zone.proto
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
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.yandex.cloud.dns.v1.DnsZone', null, global);
goog.exportSymbol('proto.yandex.cloud.dns.v1.PrivateVisibility', null, global);
goog.exportSymbol('proto.yandex.cloud.dns.v1.PublicVisibility', null, global);
goog.exportSymbol('proto.yandex.cloud.dns.v1.RecordSet', null, global);
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
proto.yandex.cloud.dns.v1.DnsZone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.dns.v1.DnsZone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.dns.v1.DnsZone.displayName = 'proto.yandex.cloud.dns.v1.DnsZone';
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
proto.yandex.cloud.dns.v1.RecordSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.dns.v1.RecordSet.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.dns.v1.RecordSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.dns.v1.RecordSet.displayName = 'proto.yandex.cloud.dns.v1.RecordSet';
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
proto.yandex.cloud.dns.v1.PrivateVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.dns.v1.PrivateVisibility.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.dns.v1.PrivateVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.dns.v1.PrivateVisibility.displayName = 'proto.yandex.cloud.dns.v1.PrivateVisibility';
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
proto.yandex.cloud.dns.v1.PublicVisibility = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.dns.v1.PublicVisibility, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.dns.v1.PublicVisibility.displayName = 'proto.yandex.cloud.dns.v1.PublicVisibility';
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
proto.yandex.cloud.dns.v1.DnsZone.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.dns.v1.DnsZone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.dns.v1.DnsZone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.DnsZone.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    zone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    privateVisibility: (f = msg.getPrivateVisibility()) && proto.yandex.cloud.dns.v1.PrivateVisibility.toObject(includeInstance, f),
    publicVisibility: (f = msg.getPublicVisibility()) && proto.yandex.cloud.dns.v1.PublicVisibility.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.dns.v1.DnsZone}
 */
proto.yandex.cloud.dns.v1.DnsZone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.dns.v1.DnsZone;
  return proto.yandex.cloud.dns.v1.DnsZone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.dns.v1.DnsZone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.dns.v1.DnsZone}
 */
proto.yandex.cloud.dns.v1.DnsZone.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setZone(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.dns.v1.PrivateVisibility;
      reader.readMessage(value,proto.yandex.cloud.dns.v1.PrivateVisibility.deserializeBinaryFromReader);
      msg.setPrivateVisibility(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.dns.v1.PublicVisibility;
      reader.readMessage(value,proto.yandex.cloud.dns.v1.PublicVisibility.deserializeBinaryFromReader);
      msg.setPublicVisibility(value);
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
proto.yandex.cloud.dns.v1.DnsZone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.dns.v1.DnsZone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.dns.v1.DnsZone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.DnsZone.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPrivateVisibility();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yandex.cloud.dns.v1.PrivateVisibility.serializeBinaryToWriter
    );
  }
  f = message.getPublicVisibility();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.dns.v1.PublicVisibility.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
*/
proto.yandex.cloud.dns.v1.DnsZone.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string zone = 7;
 * @return {string}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PrivateVisibility private_visibility = 8;
 * @return {?proto.yandex.cloud.dns.v1.PrivateVisibility}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getPrivateVisibility = function() {
  return /** @type{?proto.yandex.cloud.dns.v1.PrivateVisibility} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.dns.v1.PrivateVisibility, 8));
};


/**
 * @param {?proto.yandex.cloud.dns.v1.PrivateVisibility|undefined} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
*/
proto.yandex.cloud.dns.v1.DnsZone.prototype.setPrivateVisibility = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.clearPrivateVisibility = function() {
  return this.setPrivateVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.hasPrivateVisibility = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PublicVisibility public_visibility = 9;
 * @return {?proto.yandex.cloud.dns.v1.PublicVisibility}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.getPublicVisibility = function() {
  return /** @type{?proto.yandex.cloud.dns.v1.PublicVisibility} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.dns.v1.PublicVisibility, 9));
};


/**
 * @param {?proto.yandex.cloud.dns.v1.PublicVisibility|undefined} value
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
*/
proto.yandex.cloud.dns.v1.DnsZone.prototype.setPublicVisibility = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.dns.v1.DnsZone} returns this
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.clearPublicVisibility = function() {
  return this.setPublicVisibility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.dns.v1.DnsZone.prototype.hasPublicVisibility = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.dns.v1.RecordSet.repeatedFields_ = [4];



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
proto.yandex.cloud.dns.v1.RecordSet.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.dns.v1.RecordSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.dns.v1.RecordSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.RecordSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dataList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.dns.v1.RecordSet}
 */
proto.yandex.cloud.dns.v1.RecordSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.dns.v1.RecordSet;
  return proto.yandex.cloud.dns.v1.RecordSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.dns.v1.RecordSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.dns.v1.RecordSet}
 */
proto.yandex.cloud.dns.v1.RecordSet.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addData(value);
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
proto.yandex.cloud.dns.v1.RecordSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.dns.v1.RecordSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.dns.v1.RecordSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.RecordSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dns.v1.RecordSet} returns this
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.dns.v1.RecordSet} returns this
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ttl = 3;
 * @return {number}
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.dns.v1.RecordSet} returns this
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string data = 4;
 * @return {!Array<string>}
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.getDataList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.dns.v1.RecordSet} returns this
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.setDataList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.dns.v1.RecordSet} returns this
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.addData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.dns.v1.RecordSet} returns this
 */
proto.yandex.cloud.dns.v1.RecordSet.prototype.clearDataList = function() {
  return this.setDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.repeatedFields_ = [1];



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
proto.yandex.cloud.dns.v1.PrivateVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.dns.v1.PrivateVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.dns.v1.PrivateVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.dns.v1.PrivateVisibility}
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.dns.v1.PrivateVisibility;
  return proto.yandex.cloud.dns.v1.PrivateVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.dns.v1.PrivateVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.dns.v1.PrivateVisibility}
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNetworkIds(value);
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
proto.yandex.cloud.dns.v1.PrivateVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.dns.v1.PrivateVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.dns.v1.PrivateVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string network_ids = 1;
 * @return {!Array<string>}
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.prototype.getNetworkIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.dns.v1.PrivateVisibility} returns this
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.prototype.setNetworkIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.dns.v1.PrivateVisibility} returns this
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.prototype.addNetworkIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.dns.v1.PrivateVisibility} returns this
 */
proto.yandex.cloud.dns.v1.PrivateVisibility.prototype.clearNetworkIdsList = function() {
  return this.setNetworkIdsList([]);
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
proto.yandex.cloud.dns.v1.PublicVisibility.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.dns.v1.PublicVisibility.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.dns.v1.PublicVisibility} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.PublicVisibility.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.yandex.cloud.dns.v1.PublicVisibility}
 */
proto.yandex.cloud.dns.v1.PublicVisibility.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.dns.v1.PublicVisibility;
  return proto.yandex.cloud.dns.v1.PublicVisibility.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.dns.v1.PublicVisibility} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.dns.v1.PublicVisibility}
 */
proto.yandex.cloud.dns.v1.PublicVisibility.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.yandex.cloud.dns.v1.PublicVisibility.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.dns.v1.PublicVisibility.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.dns.v1.PublicVisibility} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.dns.v1.PublicVisibility.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.yandex.cloud.dns.v1);
