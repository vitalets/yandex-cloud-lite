// source: yandex/cloud/mdb/postgresql/v1/cluster.proto
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
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_type_timeofday_pb = require('../../../../../google/type/timeofday_pb.js');
goog.object.extend(proto, google_type_timeofday_pb);
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql9_6_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb);
var yandex_cloud_mdb_postgresql_v1_config_host9_6_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host9_6_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host9_6_pb);
var yandex_cloud_mdb_postgresql_v1_config_host10_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host10_pb);
var yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb);
var yandex_cloud_mdb_postgresql_v1_config_host11_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host11_pb);
var yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb);
var yandex_cloud_mdb_postgresql_v1_config_host12_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host12_pb);
var yandex_cloud_mdb_postgresql_v1_config_host13_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host13_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host13_pb);
var yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb);
var yandex_cloud_mdb_postgresql_v1_maintenance_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/maintenance_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_maintenance_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Access', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Cluster', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Cluster.Health', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Cluster.Status', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.PostgresqlConfigCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.PoolingMode', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Host', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Host.Health', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Host.ReplicaType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Host.Role', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.HostConfig', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.HostConfig.PostgresqlConfigCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Monitoring', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Resources', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Service', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Service.Health', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.Service.Type', null, global);
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
proto.yandex.cloud.mdb.postgresql.v1.Cluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.Cluster.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.Cluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.Cluster.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.Cluster';
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
proto.yandex.cloud.mdb.postgresql.v1.Monitoring = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.Monitoring, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.Monitoring.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.Monitoring';
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
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig';
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
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig';
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
proto.yandex.cloud.mdb.postgresql.v1.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.Host.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.Host.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.Host';
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
proto.yandex.cloud.mdb.postgresql.v1.HostConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.HostConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.HostConfig.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.HostConfig';
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
proto.yandex.cloud.mdb.postgresql.v1.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.Service.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.Service';
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
proto.yandex.cloud.mdb.postgresql.v1.Resources = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.Resources, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.Resources.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.Resources';
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
proto.yandex.cloud.mdb.postgresql.v1.Access = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.Access, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.Access.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.Access';
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
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.repeatedFields_ = [8,15];



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
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.Cluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 7, 0),
    monitoringList: jspb.Message.toObjectList(msg.getMonitoringList(),
    proto.yandex.cloud.mdb.postgresql.v1.Monitoring.toObject, includeInstance),
    config: (f = msg.getConfig()) && proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.toObject(includeInstance, f),
    networkId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    health: jspb.Message.getFieldWithDefault(msg, 11, 0),
    status: jspb.Message.getFieldWithDefault(msg, 12, 0),
    maintenanceWindow: (f = msg.getMaintenanceWindow()) && yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow.toObject(includeInstance, f),
    plannedOperation: (f = msg.getPlannedOperation()) && yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 16, false)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.Cluster;
  return proto.yandex.cloud.mdb.postgresql.v1.Cluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} */ (reader.readEnum());
      msg.setEnvironment(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.Monitoring;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.Monitoring.deserializeBinaryFromReader);
      msg.addMonitoring(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 11:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Health} */ (reader.readEnum());
      msg.setHealth(value);
      break;
    case 12:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 13:
      var value = new yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow.deserializeBinaryFromReader);
      msg.setMaintenanceWindow(value);
      break;
    case 14:
      var value = new yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation.deserializeBinaryFromReader);
      msg.setPlannedOperation(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeletionProtection(value);
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
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.Cluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEnvironment();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getMonitoringList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.Monitoring.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.serializeBinaryToWriter
    );
  }
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow.serializeBinaryToWriter
    );
  }
  f = message.getPlannedOperation();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getDeletionProtection();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment = {
  ENVIRONMENT_UNSPECIFIED: 0,
  PRODUCTION: 1,
  PRESTABLE: 2
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.Health = {
  HEALTH_UNKNOWN: 0,
  ALIVE: 1,
  DEAD: 2,
  DEGRADED: 3
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.Status = {
  STATUS_UNKNOWN: 0,
  CREATING: 1,
  RUNNING: 2,
  ERROR: 3,
  UPDATING: 4,
  STOPPING: 5,
  STOPPED: 6,
  STARTING: 7
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Environment environment = 7;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated Monitoring monitoring = 8;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Monitoring>}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getMonitoringList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.Monitoring>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.Monitoring, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Monitoring>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setMonitoringList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.addMonitoring = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.mdb.postgresql.v1.Monitoring, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.clearMonitoringList = function() {
  return this.setMonitoringList([]);
};


/**
 * optional ClusterConfig config = 9;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig, 9));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string network_id = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Health health = 11;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Health}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getHealth = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Health} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Health} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional Status status = 12;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Status}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Status} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Status} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional MaintenanceWindow maintenance_window = 13;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow, 13));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setMaintenanceWindow = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.clearMaintenanceWindow = function() {
  return this.setMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.hasMaintenanceWindow = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional MaintenanceOperation planned_operation = 14;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceOperation}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getPlannedOperation = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceOperation} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation, 14));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceOperation|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setPlannedOperation = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.clearPlannedOperation = function() {
  return this.setPlannedOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.hasPlannedOperation = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated string security_group_ids = 15;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional bool deletion_protection = 16;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Cluster.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
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
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.Monitoring.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    link: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring}
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.Monitoring;
  return proto.yandex.cloud.mdb.postgresql.v1.Monitoring.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring}
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
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
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.Monitoring.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string link = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Monitoring} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Monitoring.prototype.setLink = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_ = [[2,10,3,8,13,11,14,15]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.PostgresqlConfigCase = {
  POSTGRESQL_CONFIG_NOT_SET: 0,
  POSTGRESQL_CONFIG_9_6: 2,
  POSTGRESQL_CONFIG_10_1C: 10,
  POSTGRESQL_CONFIG_10: 3,
  POSTGRESQL_CONFIG_11: 8,
  POSTGRESQL_CONFIG_11_1C: 13,
  POSTGRESQL_CONFIG_12: 11,
  POSTGRESQL_CONFIG_12_1C: 14,
  POSTGRESQL_CONFIG_13: 15
};

/**
 * @return {proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.PostgresqlConfigCase}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfigCase = function() {
  return /** @type {proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.PostgresqlConfigCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postgresqlConfig96: (f = msg.getPostgresqlConfig96()) && yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6.toObject(includeInstance, f),
    postgresqlConfig101c: (f = msg.getPostgresqlConfig101c()) && yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C.toObject(includeInstance, f),
    postgresqlConfig10: (f = msg.getPostgresqlConfig10()) && yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10.toObject(includeInstance, f),
    postgresqlConfig11: (f = msg.getPostgresqlConfig11()) && yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11.toObject(includeInstance, f),
    postgresqlConfig111c: (f = msg.getPostgresqlConfig111c()) && yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C.toObject(includeInstance, f),
    postgresqlConfig12: (f = msg.getPostgresqlConfig12()) && yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12.toObject(includeInstance, f),
    postgresqlConfig121c: (f = msg.getPostgresqlConfig121c()) && yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C.toObject(includeInstance, f),
    postgresqlConfig13: (f = msg.getPostgresqlConfig13()) && yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13.toObject(includeInstance, f),
    poolerConfig: (f = msg.getPoolerConfig()) && proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.postgresql.v1.Resources.toObject(includeInstance, f),
    autofailover: (f = msg.getAutofailover()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    backupWindowStart: (f = msg.getBackupWindowStart()) && google_type_timeofday_pb.TimeOfDay.toObject(includeInstance, f),
    backupRetainPeriodDays: (f = msg.getBackupRetainPeriodDays()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    access: (f = msg.getAccess()) && proto.yandex.cloud.mdb.postgresql.v1.Access.toObject(includeInstance, f),
    performanceDiagnostics: (f = msg.getPerformanceDiagnostics()) && proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig;
  return proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6.deserializeBinaryFromReader);
      msg.setPostgresqlConfig96(value);
      break;
    case 10:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig101c(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10.deserializeBinaryFromReader);
      msg.setPostgresqlConfig10(value);
      break;
    case 8:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11.deserializeBinaryFromReader);
      msg.setPostgresqlConfig11(value);
      break;
    case 13:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig111c(value);
      break;
    case 11:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12.deserializeBinaryFromReader);
      msg.setPostgresqlConfig12(value);
      break;
    case 14:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig121c(value);
      break;
    case 15:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13.deserializeBinaryFromReader);
      msg.setPostgresqlConfig13(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.deserializeBinaryFromReader);
      msg.setPoolerConfig(value);
      break;
    case 5:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAutofailover(value);
      break;
    case 7:
      var value = new google_type_timeofday_pb.TimeOfDay;
      reader.readMessage(value,google_type_timeofday_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setBackupWindowStart(value);
      break;
    case 17:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setBackupRetainPeriodDays(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.Access;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.Access.deserializeBinaryFromReader);
      msg.setAccess(value);
      break;
    case 12:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.deserializeBinaryFromReader);
      msg.setPerformanceDiagnostics(value);
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
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostgresqlConfig96();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig101c();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig10();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig11();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig111c();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig12();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig121c();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig13();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13.serializeBinaryToWriter
    );
  }
  f = message.getPoolerConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.Resources.serializeBinaryToWriter
    );
  }
  f = message.getAutofailover();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getBackupWindowStart();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_type_timeofday_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
  f = message.getBackupRetainPeriodDays();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getAccess();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.Access.serializeBinaryToWriter
    );
  }
  f = message.getPerformanceDiagnostics();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional config.PostgresqlConfigSet9_6 postgresql_config_9_6 = 2;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig96 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig96 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig96 = function() {
  return this.setPostgresqlConfig96(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig96 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional config.PostgresqlConfigSet10_1C postgresql_config_10_1c = 10;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig101c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C, 10));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig101c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig101c = function() {
  return this.setPostgresqlConfig101c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig101c = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional config.PostgresqlConfigSet10 postgresql_config_10 = 3;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig10 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig10 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig10 = function() {
  return this.setPostgresqlConfig10(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig10 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional config.PostgresqlConfigSet11 postgresql_config_11 = 8;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet11}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig11 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet11} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11, 8));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet11|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig11 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig11 = function() {
  return this.setPostgresqlConfig11(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig11 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional config.PostgresqlConfigSet11_1C postgresql_config_11_1c = 13;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet11_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig111c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet11_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C, 13));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet11_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig111c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig111c = function() {
  return this.setPostgresqlConfig111c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig111c = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional config.PostgresqlConfigSet12 postgresql_config_12 = 11;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig12 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12, 11));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig12 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig12 = function() {
  return this.setPostgresqlConfig12(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig12 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional config.PostgresqlConfigSet12_1C postgresql_config_12_1c = 14;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig121c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C, 14));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig121c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig121c = function() {
  return this.setPostgresqlConfig121c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig121c = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional config.PostgresqlConfigSet13 postgresql_config_13 = 15;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet13}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPostgresqlConfig13 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet13} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13, 15));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet13|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPostgresqlConfig13 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPostgresqlConfig13 = function() {
  return this.setPostgresqlConfig13(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPostgresqlConfig13 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ConnectionPoolerConfig pooler_config = 4;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPoolerConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPoolerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPoolerConfig = function() {
  return this.setPoolerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPoolerConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Resources resources = 5;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.Resources}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.Resources, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasResources = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue autofailover = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getAutofailover = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setAutofailover = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearAutofailover = function() {
  return this.setAutofailover(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasAutofailover = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.type.TimeOfDay backup_window_start = 7;
 * @return {?proto.google.type.TimeOfDay}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getBackupWindowStart = function() {
  return /** @type{?proto.google.type.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, google_type_timeofday_pb.TimeOfDay, 7));
};


/**
 * @param {?proto.google.type.TimeOfDay|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setBackupWindowStart = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearBackupWindowStart = function() {
  return this.setBackupWindowStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasBackupWindowStart = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Int64Value backup_retain_period_days = 17;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getBackupRetainPeriodDays = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 17));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setBackupRetainPeriodDays = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearBackupRetainPeriodDays = function() {
  return this.setBackupRetainPeriodDays(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasBackupRetainPeriodDays = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Access access = 9;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.Access}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getAccess = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.Access} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.Access, 9));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.Access|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearAccess = function() {
  return this.setAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasAccess = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PerformanceDiagnostics performance_diagnostics = 12;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.getPerformanceDiagnostics = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics, 12));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.setPerformanceDiagnostics = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.clearPerformanceDiagnostics = function() {
  return this.setPerformanceDiagnostics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ClusterConfig.prototype.hasPerformanceDiagnostics = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolingMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    poolDiscard: (f = msg.getPoolDiscard()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig;
  return proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.PoolingMode} */ (reader.readEnum());
      msg.setPoolingMode(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setPoolDiscard(value);
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
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPoolDiscard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.PoolingMode = {
  POOLING_MODE_UNSPECIFIED: 0,
  SESSION: 1,
  TRANSACTION: 2,
  STATEMENT: 3
};

/**
 * optional PoolingMode pooling_mode = 1;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.PoolingMode}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.getPoolingMode = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.PoolingMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.PoolingMode} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.setPoolingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.BoolValue pool_discard = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.getPoolDiscard = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.setPoolDiscard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.clearPoolDiscard = function() {
  return this.setPoolDiscard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig.prototype.hasPoolDiscard = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.repeatedFields_ = [7];



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
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    zoneId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.postgresql.v1.Resources.toObject(includeInstance, f),
    role: jspb.Message.getFieldWithDefault(msg, 5, 0),
    health: jspb.Message.getFieldWithDefault(msg, 6, 0),
    servicesList: jspb.Message.toObjectList(msg.getServicesList(),
    proto.yandex.cloud.mdb.postgresql.v1.Service.toObject, includeInstance),
    subnetId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    replicationSource: jspb.Message.getFieldWithDefault(msg, 9, ""),
    priority: (f = msg.getPriority()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.yandex.cloud.mdb.postgresql.v1.HostConfig.toObject(includeInstance, f),
    assignPublicIp: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    replicaType: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.Host;
  return proto.yandex.cloud.mdb.postgresql.v1.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneId(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 5:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Host.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Host.Health} */ (reader.readEnum());
      msg.setHealth(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.Service;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.Service.deserializeBinaryFromReader);
      msg.addServices(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplicationSource(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPriority(value);
      break;
    case 11:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.HostConfig;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.HostConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssignPublicIp(value);
      break;
    case 13:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Host.ReplicaType} */ (reader.readEnum());
      msg.setReplicaType(value);
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
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.Resources.serializeBinaryToWriter
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.Service.serializeBinaryToWriter
    );
  }
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getReplicationSource();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPriority();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.HostConfig.serializeBinaryToWriter
    );
  }
  f = message.getAssignPublicIp();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getReplicaType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.Role = {
  ROLE_UNKNOWN: 0,
  MASTER: 1,
  REPLICA: 2
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.ReplicaType = {
  REPLICA_TYPE_UNKNOWN: 0,
  ASYNC: 1,
  SYNC: 2,
  QUORUM: 3
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.Health = {
  HEALTH_UNKNOWN: 0,
  ALIVE: 1,
  DEAD: 2,
  DEGRADED: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string zone_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Resources resources = 4;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.Resources}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.Resources, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.hasResources = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Role role = 5;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host.Role}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getRole = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Host.Role} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Host.Role} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Health health = 6;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host.Health}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getHealth = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Host.Health} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Host.Health} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated Service services = 7;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Service>}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getServicesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.Service, 7));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Service>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Service}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yandex.cloud.mdb.postgresql.v1.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};


/**
 * optional string subnet_id = 8;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string replication_source = 9;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getReplicationSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setReplicationSource = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Int64Value priority = 10;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getPriority = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 10));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setPriority = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.clearPriority = function() {
  return this.setPriority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional HostConfig config = 11;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.HostConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.HostConfig} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.HostConfig, 11));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.HostConfig|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool assign_public_ip = 12;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getAssignPublicIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setAssignPublicIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional ReplicaType replica_type = 13;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host.ReplicaType}
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.getReplicaType = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Host.ReplicaType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Host.ReplicaType} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Host.prototype.setReplicaType = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_ = [[1,4,2,3,6,5,7,8]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.PostgresqlConfigCase = {
  POSTGRESQL_CONFIG_NOT_SET: 0,
  POSTGRESQL_CONFIG_9_6: 1,
  POSTGRESQL_CONFIG_10_1C: 4,
  POSTGRESQL_CONFIG_10: 2,
  POSTGRESQL_CONFIG_11: 3,
  POSTGRESQL_CONFIG_11_1C: 6,
  POSTGRESQL_CONFIG_12: 5,
  POSTGRESQL_CONFIG_12_1C: 7,
  POSTGRESQL_CONFIG_13: 8
};

/**
 * @return {proto.yandex.cloud.mdb.postgresql.v1.HostConfig.PostgresqlConfigCase}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfigCase = function() {
  return /** @type {proto.yandex.cloud.mdb.postgresql.v1.HostConfig.PostgresqlConfigCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.HostConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    postgresqlConfig96: (f = msg.getPostgresqlConfig96()) && yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6.toObject(includeInstance, f),
    postgresqlConfig101c: (f = msg.getPostgresqlConfig101c()) && yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C.toObject(includeInstance, f),
    postgresqlConfig10: (f = msg.getPostgresqlConfig10()) && yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10.toObject(includeInstance, f),
    postgresqlConfig11: (f = msg.getPostgresqlConfig11()) && yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11.toObject(includeInstance, f),
    postgresqlConfig111c: (f = msg.getPostgresqlConfig111c()) && yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C.toObject(includeInstance, f),
    postgresqlConfig12: (f = msg.getPostgresqlConfig12()) && yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12.toObject(includeInstance, f),
    postgresqlConfig121c: (f = msg.getPostgresqlConfig121c()) && yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C.toObject(includeInstance, f),
    postgresqlConfig13: (f = msg.getPostgresqlConfig13()) && yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.HostConfig;
  return proto.yandex.cloud.mdb.postgresql.v1.HostConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6.deserializeBinaryFromReader);
      msg.setPostgresqlConfig96(value);
      break;
    case 4:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig101c(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10.deserializeBinaryFromReader);
      msg.setPostgresqlConfig10(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11.deserializeBinaryFromReader);
      msg.setPostgresqlConfig11(value);
      break;
    case 6:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig111c(value);
      break;
    case 5:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12.deserializeBinaryFromReader);
      msg.setPostgresqlConfig12(value);
      break;
    case 7:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig121c(value);
      break;
    case 8:
      var value = new yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13.deserializeBinaryFromReader);
      msg.setPostgresqlConfig13(value);
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
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.HostConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostgresqlConfig96();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig101c();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig10();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig11();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig111c();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig12();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig121c();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig13();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.PostgresqlHostConfig9_6 postgresql_config_9_6 = 1;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig96 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig96 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig96 = function() {
  return this.setPostgresqlConfig96(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig96 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.PostgresqlHostConfig10_1C postgresql_config_10_1c = 4;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig101c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig101c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig101c = function() {
  return this.setPostgresqlConfig101c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig101c = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional config.PostgresqlHostConfig10 postgresql_config_10 = 2;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig10 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig10 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig10 = function() {
  return this.setPostgresqlConfig10(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig10 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional config.PostgresqlHostConfig11 postgresql_config_11 = 3;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig11 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig11 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig11 = function() {
  return this.setPostgresqlConfig11(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig11 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional config.PostgresqlHostConfig11_1C postgresql_config_11_1c = 6;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig111c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig111c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig111c = function() {
  return this.setPostgresqlConfig111c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig111c = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional config.PostgresqlHostConfig12 postgresql_config_12 = 5;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig12 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig12 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig12 = function() {
  return this.setPostgresqlConfig12(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig12 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional config.PostgresqlHostConfig12_1C postgresql_config_12_1c = 7;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig121c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C, 7));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig121c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig121c = function() {
  return this.setPostgresqlConfig121c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig121c = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional config.PostgresqlHostConfig13 postgresql_config_13 = 8;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig13}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.getPostgresqlConfig13 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig13} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13, 8));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig13|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.setPostgresqlConfig13 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.yandex.cloud.mdb.postgresql.v1.HostConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostConfig} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.clearPostgresqlConfig13 = function() {
  return this.setPostgresqlConfig13(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostConfig.prototype.hasPostgresqlConfig13 = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.yandex.cloud.mdb.postgresql.v1.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    health: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Service}
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.Service;
  return proto.yandex.cloud.mdb.postgresql.v1.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Service}
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Service.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Service.Health} */ (reader.readEnum());
      msg.setHealth(value);
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
proto.yandex.cloud.mdb.postgresql.v1.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getHealth();
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
proto.yandex.cloud.mdb.postgresql.v1.Service.Type = {
  TYPE_UNSPECIFIED: 0,
  POSTGRESQL: 1,
  POOLER: 2
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.Health = {
  HEALTH_UNKNOWN: 0,
  ALIVE: 1,
  DEAD: 2
};

/**
 * optional Type type = 1;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Service.Type}
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Service.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Service.Type} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Service} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Health health = 2;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Service.Health}
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.prototype.getHealth = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Service.Health} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Service.Health} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Service} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Service.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.Resources.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Resources} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcePresetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    diskSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    diskTypeId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Resources}
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.Resources;
  return proto.yandex.cloud.mdb.postgresql.v1.Resources.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Resources} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Resources}
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiskSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiskTypeId(value);
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
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.Resources.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Resources} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcePresetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDiskSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDiskTypeId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string resource_preset_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.getResourcePresetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Resources} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.setResourcePresetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 disk_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.getDiskSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Resources} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.setDiskSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string disk_type_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.getDiskTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Resources} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Resources.prototype.setDiskTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.Access.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Access} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataLens: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    webSql: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    serverless: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Access}
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.Access;
  return proto.yandex.cloud.mdb.postgresql.v1.Access.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Access} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Access}
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDataLens(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWebSql(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerless(value);
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
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.Access.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Access} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataLens();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getWebSql();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getServerless();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool data_lens = 1;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.getDataLens = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Access} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.setDataLens = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool web_sql = 2;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.getWebSql = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Access} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.setWebSql = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool serverless = 3;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.getServerless = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Access} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.Access.prototype.setServerless = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    sessionsSamplingInterval: jspb.Message.getFieldWithDefault(msg, 2, 0),
    statementsSamplingInterval: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics}
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics;
  return proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics}
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionsSamplingInterval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStatementsSamplingInterval(value);
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
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSessionsSamplingInterval();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStatementsSamplingInterval();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 sessions_sampling_interval = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.getSessionsSamplingInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.setSessionsSamplingInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 statements_sampling_interval = 3;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.getStatementsSamplingInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics.prototype.setStatementsSamplingInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.yandex.cloud.mdb.postgresql.v1);
