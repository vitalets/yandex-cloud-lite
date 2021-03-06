// source: yandex/cloud/vpc/v1/route_table.proto
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
goog.exportSymbol('proto.yandex.cloud.vpc.v1.RouteTable', null, global);
goog.exportSymbol('proto.yandex.cloud.vpc.v1.StaticRoute', null, global);
goog.exportSymbol('proto.yandex.cloud.vpc.v1.StaticRoute.DestinationCase', null, global);
goog.exportSymbol('proto.yandex.cloud.vpc.v1.StaticRoute.NextHopCase', null, global);
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
proto.yandex.cloud.vpc.v1.RouteTable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.vpc.v1.RouteTable.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.vpc.v1.RouteTable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.vpc.v1.RouteTable.displayName = 'proto.yandex.cloud.vpc.v1.RouteTable';
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
proto.yandex.cloud.vpc.v1.StaticRoute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.vpc.v1.StaticRoute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.vpc.v1.StaticRoute.displayName = 'proto.yandex.cloud.vpc.v1.StaticRoute';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.vpc.v1.RouteTable.repeatedFields_ = [8];



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
proto.yandex.cloud.vpc.v1.RouteTable.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.vpc.v1.RouteTable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.vpc.v1.RouteTable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.vpc.v1.RouteTable.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    networkId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    staticRoutesList: jspb.Message.toObjectList(msg.getStaticRoutesList(),
    proto.yandex.cloud.vpc.v1.StaticRoute.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable}
 */
proto.yandex.cloud.vpc.v1.RouteTable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.vpc.v1.RouteTable;
  return proto.yandex.cloud.vpc.v1.RouteTable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.vpc.v1.RouteTable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable}
 */
proto.yandex.cloud.vpc.v1.RouteTable.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNetworkId(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.vpc.v1.StaticRoute;
      reader.readMessage(value,proto.yandex.cloud.vpc.v1.StaticRoute.deserializeBinaryFromReader);
      msg.addStaticRoutes(value);
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
proto.yandex.cloud.vpc.v1.RouteTable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.vpc.v1.RouteTable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.vpc.v1.RouteTable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.vpc.v1.RouteTable.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStaticRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yandex.cloud.vpc.v1.StaticRoute.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
*/
proto.yandex.cloud.vpc.v1.RouteTable.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string network_id = 7;
 * @return {string}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated StaticRoute static_routes = 8;
 * @return {!Array<!proto.yandex.cloud.vpc.v1.StaticRoute>}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.getStaticRoutesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.vpc.v1.StaticRoute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.vpc.v1.StaticRoute, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.vpc.v1.StaticRoute>} value
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
*/
proto.yandex.cloud.vpc.v1.RouteTable.prototype.setStaticRoutesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.vpc.v1.StaticRoute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute}
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.addStaticRoutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.vpc.v1.StaticRoute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.vpc.v1.RouteTable} returns this
 */
proto.yandex.cloud.vpc.v1.RouteTable.prototype.clearStaticRoutesList = function() {
  return this.setStaticRoutesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_ = [[1],[2]];

/**
 * @enum {number}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.DestinationCase = {
  DESTINATION_NOT_SET: 0,
  DESTINATION_PREFIX: 1
};

/**
 * @return {proto.yandex.cloud.vpc.v1.StaticRoute.DestinationCase}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.getDestinationCase = function() {
  return /** @type {proto.yandex.cloud.vpc.v1.StaticRoute.DestinationCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.NextHopCase = {
  NEXT_HOP_NOT_SET: 0,
  NEXT_HOP_ADDRESS: 2
};

/**
 * @return {proto.yandex.cloud.vpc.v1.StaticRoute.NextHopCase}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.getNextHopCase = function() {
  return /** @type {proto.yandex.cloud.vpc.v1.StaticRoute.NextHopCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_[1]));
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
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.vpc.v1.StaticRoute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.vpc.v1.StaticRoute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.vpc.v1.StaticRoute.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationPrefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nextHopAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.vpc.v1.StaticRoute;
  return proto.yandex.cloud.vpc.v1.StaticRoute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.vpc.v1.StaticRoute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextHopAddress(value);
      break;
    case 3:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
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
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.vpc.v1.StaticRoute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.vpc.v1.StaticRoute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.vpc.v1.StaticRoute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string destination_prefix = 1;
 * @return {string}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.getDestinationPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute} returns this
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.setDestinationPrefix = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute} returns this
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.clearDestinationPrefix = function() {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.hasDestinationPrefix = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string next_hop_address = 2;
 * @return {string}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.getNextHopAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute} returns this
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.setNextHopAddress = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute} returns this
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.clearNextHopAddress = function() {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.vpc.v1.StaticRoute.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.hasNextHopAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.vpc.v1.StaticRoute} returns this
 */
proto.yandex.cloud.vpc.v1.StaticRoute.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


goog.object.extend(exports, proto.yandex.cloud.vpc.v1);
