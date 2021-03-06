// source: yandex/cloud/mdb/mongodb/v1/cluster.proto
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
var yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb);
var yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb);
var yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb);
var yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb);
var yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_enterprise_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb);
var yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb);
var yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_enterprise_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb);
var yandex_cloud_mdb_mongodb_v1_maintenance_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/maintenance_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_maintenance_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Access', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Cluster', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Cluster.Health', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Cluster.Status', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.MongodbCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Host', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Host.Health', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Host.Role', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Host.Type', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Monitoring', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Resources', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Service', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Service.Health', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Service.Type', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.Shard', null, global);
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
proto.yandex.cloud.mdb.mongodb.v1.Cluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.Cluster.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Cluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Cluster.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Cluster';
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
proto.yandex.cloud.mdb.mongodb.v1.Monitoring = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Monitoring, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Monitoring.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Monitoring';
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
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.Shard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Shard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Shard.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Shard';
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
proto.yandex.cloud.mdb.mongodb.v1.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.Host.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Host.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Host';
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
proto.yandex.cloud.mdb.mongodb.v1.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Service.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Service';
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
proto.yandex.cloud.mdb.mongodb.v1.Resources = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Resources, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Resources.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Resources';
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
proto.yandex.cloud.mdb.mongodb.v1.Access = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.Access, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.Access.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.Access';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.repeatedFields_ = [8,16];



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
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Cluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 7, 0),
    monitoringList: jspb.Message.toObjectList(msg.getMonitoringList(),
    proto.yandex.cloud.mdb.mongodb.v1.Monitoring.toObject, includeInstance),
    config: (f = msg.getConfig()) && proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.toObject(includeInstance, f),
    networkId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    health: jspb.Message.getFieldWithDefault(msg, 11, 0),
    status: jspb.Message.getFieldWithDefault(msg, 12, 0),
    sharded: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    maintenanceWindow: (f = msg.getMaintenanceWindow()) && yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow.toObject(includeInstance, f),
    plannedOperation: (f = msg.getPlannedOperation()) && yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Cluster;
  return proto.yandex.cloud.mdb.mongodb.v1.Cluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} */ (reader.readEnum());
      msg.setEnvironment(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Monitoring;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Monitoring.deserializeBinaryFromReader);
      msg.addMonitoring(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 11:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Health} */ (reader.readEnum());
      msg.setHealth(value);
      break;
    case 12:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSharded(value);
      break;
    case 14:
      var value = new yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow.deserializeBinaryFromReader);
      msg.setMaintenanceWindow(value);
      break;
    case 15:
      var value = new yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation.deserializeBinaryFromReader);
      msg.setPlannedOperation(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
      break;
    case 17:
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
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Cluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.mongodb.v1.Monitoring.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.serializeBinaryToWriter
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
  f = message.getSharded();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow.serializeBinaryToWriter
    );
  }
  f = message.getPlannedOperation();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getDeletionProtection();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment = {
  ENVIRONMENT_UNSPECIFIED: 0,
  PRODUCTION: 1,
  PRESTABLE: 2
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.Health = {
  HEALTH_UNKNOWN: 0,
  ALIVE: 1,
  DEAD: 2,
  DEGRADED: 3
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.Status = {
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
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Environment environment = 7;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated Monitoring monitoring = 8;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Monitoring>}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getMonitoringList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.Monitoring>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Monitoring, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Monitoring>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setMonitoringList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.addMonitoring = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.mdb.mongodb.v1.Monitoring, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.clearMonitoringList = function() {
  return this.setMonitoringList([]);
};


/**
 * optional ClusterConfig config = 9;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig, 9));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string network_id = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Health health = 11;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Health}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getHealth = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Health} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Health} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional Status status = 12;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Status}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Status} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Status} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional bool sharded = 13;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getSharded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setSharded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional MaintenanceWindow maintenance_window = 14;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow, 14));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setMaintenanceWindow = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.clearMaintenanceWindow = function() {
  return this.setMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.hasMaintenanceWindow = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional MaintenanceOperation planned_operation = 15;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceOperation}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getPlannedOperation = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceOperation} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation, 15));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceOperation|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setPlannedOperation = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.clearPlannedOperation = function() {
  return this.setPlannedOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.hasPlannedOperation = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated string security_group_ids = 16;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional bool deletion_protection = 17;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Cluster.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
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
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Monitoring.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring}
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Monitoring;
  return proto.yandex.cloud.mdb.mongodb.v1.Monitoring.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring}
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Monitoring.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string link = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Monitoring} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Monitoring.prototype.setLink = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_ = [[2,4,7,8,10,11,12]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.MongodbCase = {
  MONGODB_NOT_SET: 0,
  MONGODB_3_6: 2,
  MONGODB_4_0: 4,
  MONGODB_4_2: 7,
  MONGODB_4_4: 8,
  MONGODB_5_0: 10,
  MONGODB_4_4_ENTERPRISE: 11,
  MONGODB_5_0_ENTERPRISE: 12
};

/**
 * @return {proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.MongodbCase}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodbCase = function() {
  return /** @type {proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.MongodbCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    featureCompatibilityVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mongodb36: (f = msg.getMongodb36()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.toObject(includeInstance, f),
    mongodb40: (f = msg.getMongodb40()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.toObject(includeInstance, f),
    mongodb42: (f = msg.getMongodb42()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.toObject(includeInstance, f),
    mongodb44: (f = msg.getMongodb44()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.toObject(includeInstance, f),
    mongodb50: (f = msg.getMongodb50()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.toObject(includeInstance, f),
    mongodb44Enterprise: (f = msg.getMongodb44Enterprise()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.toObject(includeInstance, f),
    mongodb50Enterprise: (f = msg.getMongodb50Enterprise()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.toObject(includeInstance, f),
    backupWindowStart: (f = msg.getBackupWindowStart()) && google_type_timeofday_pb.TimeOfDay.toObject(includeInstance, f),
    backupRetainPeriodDays: (f = msg.getBackupRetainPeriodDays()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    access: (f = msg.getAccess()) && proto.yandex.cloud.mdb.mongodb.v1.Access.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig;
  return proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeatureCompatibilityVersion(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.deserializeBinaryFromReader);
      msg.setMongodb36(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.deserializeBinaryFromReader);
      msg.setMongodb40(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.deserializeBinaryFromReader);
      msg.setMongodb42(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.deserializeBinaryFromReader);
      msg.setMongodb44(value);
      break;
    case 10:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.deserializeBinaryFromReader);
      msg.setMongodb50(value);
      break;
    case 11:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.deserializeBinaryFromReader);
      msg.setMongodb44Enterprise(value);
      break;
    case 12:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.deserializeBinaryFromReader);
      msg.setMongodb50Enterprise(value);
      break;
    case 3:
      var value = new google_type_timeofday_pb.TimeOfDay;
      reader.readMessage(value,google_type_timeofday_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setBackupWindowStart(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setBackupRetainPeriodDays(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Access;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Access.deserializeBinaryFromReader);
      msg.setAccess(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeatureCompatibilityVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMongodb36();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.serializeBinaryToWriter
    );
  }
  f = message.getMongodb40();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.serializeBinaryToWriter
    );
  }
  f = message.getMongodb42();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.serializeBinaryToWriter
    );
  }
  f = message.getMongodb44();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.serializeBinaryToWriter
    );
  }
  f = message.getMongodb50();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.serializeBinaryToWriter
    );
  }
  f = message.getMongodb44Enterprise();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getMongodb50Enterprise();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getBackupWindowStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_type_timeofday_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
  f = message.getBackupRetainPeriodDays();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getAccess();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Access.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string feature_compatibility_version = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getFeatureCompatibilityVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setFeatureCompatibilityVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Mongodb3_6 mongodb_3_6 = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodb36 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setMongodb36 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearMongodb36 = function() {
  return this.setMongodb36(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasMongodb36 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongodb4_0 mongodb_4_0 = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodb40 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setMongodb40 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearMongodb40 = function() {
  return this.setMongodb40(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasMongodb40 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Mongodb4_2 mongodb_4_2 = 7;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodb42 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2, 7));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setMongodb42 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearMongodb42 = function() {
  return this.setMongodb42(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasMongodb42 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Mongodb4_4 mongodb_4_4 = 8;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodb44 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4, 8));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setMongodb44 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearMongodb44 = function() {
  return this.setMongodb44(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasMongodb44 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Mongodb5_0 mongodb_5_0 = 10;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodb50 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0, 10));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setMongodb50 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearMongodb50 = function() {
  return this.setMongodb50(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasMongodb50 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Mongodb4_4_enterprise mongodb_4_4_enterprise = 11;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodb44Enterprise = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise, 11));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setMongodb44Enterprise = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearMongodb44Enterprise = function() {
  return this.setMongodb44Enterprise(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasMongodb44Enterprise = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Mongodb5_0_enterprise mongodb_5_0_enterprise = 12;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getMongodb50Enterprise = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise, 12));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setMongodb50Enterprise = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearMongodb50Enterprise = function() {
  return this.setMongodb50Enterprise(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasMongodb50Enterprise = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.type.TimeOfDay backup_window_start = 3;
 * @return {?proto.google.type.TimeOfDay}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getBackupWindowStart = function() {
  return /** @type{?proto.google.type.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, google_type_timeofday_pb.TimeOfDay, 3));
};


/**
 * @param {?proto.google.type.TimeOfDay|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setBackupWindowStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearBackupWindowStart = function() {
  return this.setBackupWindowStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasBackupWindowStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int64Value backup_retain_period_days = 9;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getBackupRetainPeriodDays = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 9));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setBackupRetainPeriodDays = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearBackupRetainPeriodDays = function() {
  return this.setBackupRetainPeriodDays(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasBackupRetainPeriodDays = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Access access = 6;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Access}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.getAccess = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Access} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Access, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Access|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.clearAccess = function() {
  return this.setAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ClusterConfig.prototype.hasAccess = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.deserializeBinaryFromReader);
      msg.setMongoinfra(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfigSet3_6 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfigSet3_6 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet3_6 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet3_6 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfigSet3_6 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb3_6.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.deserializeBinaryFromReader);
      msg.setMongoinfra(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfigSet4_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfigSet4_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_0 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfigSet4_0 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_0.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.deserializeBinaryFromReader);
      msg.setMongoinfra(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfigSet4_2 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfigSet4_2 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_2 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_2 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfigSet4_2 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_2.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.deserializeBinaryFromReader);
      msg.setMongoinfra(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfigSet4_4 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfigSet4_4 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_4 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_4 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfigSet4_4 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.deserializeBinaryFromReader);
      msg.setMongoinfra(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfigSet4_4_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfigSet4_4_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_4_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet4_4_enterprise config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfigSet4_4_enterprise config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb4_4_enterprise.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.deserializeBinaryFromReader);
      msg.setMongoinfra(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfigSet5_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfigSet5_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet5_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet5_0 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfigSet5_0 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.deserializeBinaryFromReader);
      msg.setMongoinfra(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfigSet5_0_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfigSet5_0_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet5_0_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfigSet5_0_enterprise config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfigSet5_0_enterprise config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Mongodb5_0_enterprise.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.Shard.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Shard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Shard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Shard}
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Shard;
  return proto.yandex.cloud.mdb.mongodb.v1.Shard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Shard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Shard}
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.mongodb.v1.Shard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Shard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Shard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Shard} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Shard} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Shard.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.repeatedFields_ = [7];



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
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    zoneId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resources: (f = msg.getResources()) && proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(includeInstance, f),
    role: jspb.Message.getFieldWithDefault(msg, 5, 0),
    health: jspb.Message.getFieldWithDefault(msg, 6, 0),
    servicesList: jspb.Message.toObjectList(msg.getServicesList(),
    proto.yandex.cloud.mdb.mongodb.v1.Service.toObject, includeInstance),
    subnetId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    assignPublicIp: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    shardName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    type: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Host;
  return proto.yandex.cloud.mdb.mongodb.v1.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 5:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Health} */ (reader.readEnum());
      msg.setHealth(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.Service;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.Service.deserializeBinaryFromReader);
      msg.addServices(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssignPublicIp(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
      break;
    case 11:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter
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
      proto.yandex.cloud.mdb.mongodb.v1.Service.serializeBinaryToWriter
    );
  }
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAssignPublicIp();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.Type = {
  TYPE_UNSPECIFIED: 0,
  MONGOD: 1,
  MONGOS: 2,
  MONGOCFG: 3,
  MONGOINFRA: 4
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.Role = {
  ROLE_UNKNOWN: 0,
  PRIMARY: 1,
  SECONDARY: 2
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.Health = {
  HEALTH_UNKNOWN: 0,
  ALIVE: 1,
  DEAD: 2,
  DEGRADED: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string zone_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Resources resources = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Resources, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.hasResources = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Role role = 5;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host.Role}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getRole = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Role} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host.Role} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Health health = 6;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host.Health}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getHealth = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Health} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host.Health} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated Service services = 7;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Service>}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getServicesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.Service, 7));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Service>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Service}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yandex.cloud.mdb.mongodb.v1.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};


/**
 * optional string subnet_id = 8;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool assign_public_ip = 9;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getAssignPublicIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setAssignPublicIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string shard_name = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Type type = 11;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type}
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Host.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
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
proto.yandex.cloud.mdb.mongodb.v1.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Service}
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Service;
  return proto.yandex.cloud.mdb.mongodb.v1.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Service}
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Service.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Service.Health} */ (reader.readEnum());
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
proto.yandex.cloud.mdb.mongodb.v1.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.mongodb.v1.Service.Type = {
  TYPE_UNSPECIFIED: 0,
  MONGOD: 1,
  MONGOS: 2,
  MONGOCFG: 3
};

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.Health = {
  HEALTH_UNKNOWN: 0,
  ALIVE: 1,
  DEAD: 2
};

/**
 * optional Type type = 1;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Service.Type}
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Service.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Service.Type} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Service} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Health health = 2;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Service.Health}
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.prototype.getHealth = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Service.Health} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Service.Health} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Service} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Service.prototype.setHealth = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Resources} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Resources;
  return proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Resources} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Resources} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.getResourcePresetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Resources} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.setResourcePresetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 disk_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.getDiskSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Resources} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.setDiskSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string disk_type_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.getDiskTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Resources} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Resources.prototype.setDiskTypeId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.Access.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.Access.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Access} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Access.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataLens: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Access}
 */
proto.yandex.cloud.mdb.mongodb.v1.Access.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.Access;
  return proto.yandex.cloud.mdb.mongodb.v1.Access.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Access} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Access}
 */
proto.yandex.cloud.mdb.mongodb.v1.Access.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.mongodb.v1.Access.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.Access.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Access} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.Access.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataLens();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool data_lens = 1;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.Access.prototype.getDataLens = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Access} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.Access.prototype.setDataLens = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.yandex.cloud.mdb.mongodb.v1);
