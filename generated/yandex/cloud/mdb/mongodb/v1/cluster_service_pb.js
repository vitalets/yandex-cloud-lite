// source: yandex/cloud/mdb/mongodb/v1/cluster_service.proto
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
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_type_timeofday_pb = require('../../../../../google/type/timeofday_pb.js');
goog.object.extend(proto, google_type_timeofday_pb);
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
goog.object.extend(proto, yandex_cloud_api_operation_pb);
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
goog.object.extend(proto, yandex_cloud_operation_operation_pb);
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
var yandex_cloud_mdb_mongodb_v1_backup_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/backup_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_backup_pb);
var yandex_cloud_mdb_mongodb_v1_cluster_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/cluster_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_cluster_pb);
var yandex_cloud_mdb_mongodb_v1_database_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/database_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_database_pb);
var yandex_cloud_mdb_mongodb_v1_user_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/user_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_mongodb_v1_user_pb);
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
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.MongodbSpecCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.HostSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.ServiceType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.LogRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.RescheduleType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.ServiceType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest', null, global);
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
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse';
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
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec';
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.LogRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.LogRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.LogRecord.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.LogRecord';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse';
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
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord';
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
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse';
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse';
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest';
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
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata';
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
proto.yandex.cloud.mdb.mongodb.v1.HostSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.HostSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.HostSpec.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.HostSpec';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos';
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra';
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
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.displayName = 'proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec';
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
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    yandex_cloud_mdb_mongodb_v1_cluster_pb.Cluster.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Cluster;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Cluster.deserializeBinaryFromReader);
      msg.addClusters(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Cluster.serializeBinaryToWriter
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
 * repeated Cluster clusters = 1;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Cluster>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.Cluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Cluster, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Cluster>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.mongodb.v1.Cluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClustersResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.repeatedFields_ = [7,8,9,11];



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
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 5, 0),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.toObject(includeInstance, f),
    databaseSpecsList: jspb.Message.toObjectList(msg.getDatabaseSpecsList(),
    yandex_cloud_mdb_mongodb_v1_database_pb.DatabaseSpec.toObject, includeInstance),
    userSpecsList: jspb.Message.toObjectList(msg.getUserSpecsList(),
    yandex_cloud_mdb_mongodb_v1_user_pb.UserSpec.toObject, includeInstance),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.mongodb.v1.HostSpec.toObject, includeInstance),
    networkId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} */ (reader.readEnum());
      msg.setEnvironment(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 7:
      var value = new yandex_cloud_mdb_mongodb_v1_database_pb.DatabaseSpec;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_database_pb.DatabaseSpec.deserializeBinaryFromReader);
      msg.addDatabaseSpecs(value);
      break;
    case 8:
      var value = new yandex_cloud_mdb_mongodb_v1_user_pb.UserSpec;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_user_pb.UserSpec.deserializeBinaryFromReader);
      msg.addUserSpecs(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinaryFromReader);
      msg.addHostSpecs(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
      break;
    case 12:
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
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getEnvironment();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getConfigSpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.serializeBinaryToWriter
    );
  }
  f = message.getDatabaseSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      yandex_cloud_mdb_mongodb_v1_database_pb.DatabaseSpec.serializeBinaryToWriter
    );
  }
  f = message.getUserSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      yandex_cloud_mdb_mongodb_v1_user_pb.UserSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.HostSpec.serializeBinaryToWriter
    );
  }
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getDeletionProtection();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Cluster.Environment environment = 5;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ConfigSpec config_spec = 6;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated DatabaseSpec database_specs = 7;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.DatabaseSpec>}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getDatabaseSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.DatabaseSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_mongodb_v1_database_pb.DatabaseSpec, 7));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.DatabaseSpec>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setDatabaseSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DatabaseSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DatabaseSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.addDatabaseSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yandex.cloud.mdb.mongodb.v1.DatabaseSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.clearDatabaseSpecsList = function() {
  return this.setDatabaseSpecsList([]);
};


/**
 * repeated UserSpec user_specs = 8;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.UserSpec>}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getUserSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.UserSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_mongodb_v1_user_pb.UserSpec, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.UserSpec>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setUserSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.UserSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UserSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.addUserSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.mdb.mongodb.v1.UserSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.clearUserSpecsList = function() {
  return this.setUserSpecsList([]);
};


/**
 * repeated HostSpec host_specs = 9;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, 9));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};


/**
 * optional string network_id = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string security_group_ids = 11;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional bool deletion_protection = 12;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterRequest.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
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
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.CreateClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.repeatedFields_ = [8];



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
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    maintenanceWindow: (f = msg.getMaintenanceWindow()) && yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = new yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow.deserializeBinaryFromReader);
      msg.setMaintenanceWindow(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
      break;
    case 9:
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
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getConfigSpec();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getDeletionProtection();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional ConfigSpec config_spec = 5;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional MaintenanceWindow maintenance_window = 7;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow, 7));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setMaintenanceWindow = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.clearMaintenanceWindow = function() {
  return this.setMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.hasMaintenanceWindow = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string security_group_ids = 8;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional bool deletion_protection = 9;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterRequest.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
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
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.UpdateClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StartClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StopClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destinationFolderId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationFolderId(value);
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
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestinationFolderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterRequest.prototype.setDestinationFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceFolderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationFolderId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceFolderId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationFolderId(value);
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
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceFolderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationFolderId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.getSourceFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.setSourceFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_folder_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MoveClusterMetadata.prototype.setDestinationFolderId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.BackupClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.repeatedFields_ = [7,11];



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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 5, 0),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.toObject(includeInstance, f),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.mongodb.v1.HostSpec.toObject, includeInstance),
    networkId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    recoveryTargetSpec: (f = msg.getRecoveryTargetSpec()) && proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} */ (reader.readEnum());
      msg.setEnvironment(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinaryFromReader);
      msg.addHostSpecs(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 10:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.deserializeBinaryFromReader);
      msg.setRecoveryTargetSpec(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getEnvironment();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getConfigSpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.HostSpec.serializeBinaryToWriter
    );
  }
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRecoveryTargetSpec();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec;
  return proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setBackupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Cluster.Environment environment = 5;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ConfigSpec config_spec = 6;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated HostSpec host_specs = 7;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, 7));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};


/**
 * optional string network_id = 8;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string folder_id = 9;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional RecoveryTargetSpec recovery_target_spec = 10;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getRecoveryTargetSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec, 10));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.RecoveryTargetSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setRecoveryTargetSpec = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.clearRecoveryTargetSpec = function() {
  return this.setRecoveryTargetSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.hasRecoveryTargetSpec = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated string security_group_ids = 11;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backupId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackupId(value);
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
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string backup_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestoreClusterMetadata.prototype.setBackupId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rescheduleType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    delayedUntil: (f = msg.getDelayedUntil()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.RescheduleType} */ (reader.readEnum());
      msg.setRescheduleType(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDelayedUntil(value);
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
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRescheduleType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDelayedUntil();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.RescheduleType = {
  RESCHEDULE_TYPE_UNSPECIFIED: 0,
  IMMEDIATE: 1,
  NEXT_AVAILABLE_WINDOW: 2,
  SPECIFIC_TIME: 3
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RescheduleType reschedule_type = 2;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.RescheduleType}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.getRescheduleType = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.RescheduleType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.RescheduleType} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.setRescheduleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp delayed_until = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.getDelayedUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.setDelayedUntil = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.clearDelayedUntil = function() {
  return this.setDelayedUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceRequest.prototype.hasDelayedUntil = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    delayedUntil: (f = msg.getDelayedUntil()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDelayedUntil(value);
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
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDelayedUntil();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp delayed_until = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.getDelayedUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.setDelayedUntil = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.clearDelayedUntil = function() {
  return this.setDelayedUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.RescheduleMaintenanceMetadata.prototype.hasDelayedUntil = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.LogRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    messageMap: (f = msg.getMessageMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord}
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.LogRecord;
  return proto.yandex.cloud.mdb.mongodb.v1.LogRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord}
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = msg.getMessageMap();
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
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.LogRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMessageMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, string> message = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.getMessageMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.LogRecord.prototype.clearMessageMap = function() {
  this.getMessageMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    columnFilterList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    serviceType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fromTime: (f = msg.getFromTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    toTime: (f = msg.getToTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumnFilter(value);
      break;
    case 3:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.ServiceType} */ (reader.readEnum());
      msg.setServiceType(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 7:
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnFilterList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getServiceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFromTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.ServiceType = {
  SERVICE_TYPE_UNSPECIFIED: 0,
  MONGOD: 1,
  MONGOS: 2,
  MONGOCFG: 3
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string column_filter = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.getColumnFilterList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.setColumnFilterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.addColumnFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.clearColumnFilterList = function() {
  return this.setColumnFilterList([]);
};


/**
 * optional ServiceType service_type = 3;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.ServiceType}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.getServiceType = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.ServiceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.ServiceType} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.setServiceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp from_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.getFromTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.clearFromTime = function() {
  return this.setFromTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp to_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.getToTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.setToTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.clearToTime = function() {
  return this.setToTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 page_size = 6;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.yandex.cloud.mdb.mongodb.v1.LogRecord.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.LogRecord;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.LogRecord.deserializeBinaryFromReader);
      msg.addLogs(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.LogRecord.serializeBinaryToWriter
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
 * repeated LogRecord logs = 1;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.LogRecord>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.LogRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.LogRecord, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.LogRecord>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.LogRecord}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.mongodb.v1.LogRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: (f = msg.getRecord()) && proto.yandex.cloud.mdb.mongodb.v1.LogRecord.toObject(includeInstance, f),
    nextRecordToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord;
  return proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.LogRecord;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.LogRecord.deserializeBinaryFromReader);
      msg.setRecord(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextRecordToken(value);
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
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.LogRecord.serializeBinaryToWriter
    );
  }
  f = message.getNextRecordToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional LogRecord record = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.LogRecord}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.getRecord = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.LogRecord} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.LogRecord, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.LogRecord|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.setRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.clearRecord = function() {
  return this.setRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.hasRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string next_record_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.getNextRecordToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamLogRecord.prototype.setNextRecordToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    columnFilterList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    serviceType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fromTime: (f = msg.getFromTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    toTime: (f = msg.getToTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    recordToken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumnFilter(value);
      break;
    case 3:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.ServiceType} */ (reader.readEnum());
      msg.setServiceType(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordToken(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
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
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnFilterList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getServiceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFromTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRecordToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.ServiceType = {
  SERVICE_TYPE_UNSPECIFIED: 0,
  MONGOD: 1,
  MONGOS: 2,
  MONGOCFG: 3
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string column_filter = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.getColumnFilterList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.setColumnFilterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.addColumnFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.clearColumnFilterList = function() {
  return this.setColumnFilterList([]);
};


/**
 * optional ServiceType service_type = 3;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.ServiceType}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.getServiceType = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.ServiceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.ServiceType} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.setServiceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp from_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.getFromTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.clearFromTime = function() {
  return this.setFromTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp to_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.getToTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.setToTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.clearToTime = function() {
  return this.setToTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string record_token = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.getRecordToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.setRecordToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string filter = 7;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StreamClusterLogsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    yandex_cloud_operation_operation_pb.Operation.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_operation_operation_pb.Operation;
      reader.readMessage(value,yandex_cloud_operation_operation_pb.Operation.deserializeBinaryFromReader);
      msg.addOperations(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_operation_operation_pb.Operation.serializeBinaryToWriter
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
 * repeated yandex.cloud.operation.Operation operations = 1;
 * @return {!Array<!proto.yandex.cloud.operation.Operation>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.operation.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_operation_operation_pb.Operation, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.operation.Operation>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.operation.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.operation.Operation}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.operation.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterOperationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupsList: jspb.Message.toObjectList(msg.getBackupsList(),
    yandex_cloud_mdb_mongodb_v1_backup_pb.Backup.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_backup_pb.Backup;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_backup_pb.Backup.deserializeBinaryFromReader);
      msg.addBackups(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_backup_pb.Backup.serializeBinaryToWriter
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
 * repeated Backup backups = 1;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Backup>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.getBackupsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.Backup>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_mongodb_v1_backup_pb.Backup, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Backup>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.setBackupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Backup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Backup}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.addBackups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.mongodb.v1.Backup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.clearBackupsList = function() {
  return this.setBackupsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterBackupsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostsList: jspb.Message.toObjectList(msg.getHostsList(),
    yandex_cloud_mdb_mongodb_v1_cluster_pb.Host.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Host;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Host.deserializeBinaryFromReader);
      msg.addHosts(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Host.serializeBinaryToWriter
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
 * repeated Host hosts = 1;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Host>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.getHostsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.Host>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Host, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Host>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.setHostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.addHosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.mongodb.v1.Host, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.clearHostsList = function() {
  return this.setHostsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterHostsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.mongodb.v1.HostSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinaryFromReader);
      msg.addHostSpecs(value);
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.HostSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated HostSpec host_specs = 2;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsRequest.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.repeatedFields_ = [4];



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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.toObject(includeInstance, f),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.mongodb.v1.HostSpec.toObject, includeInstance),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinaryFromReader);
      msg.addHostSpecs(value);
      break;
    case 5:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.HostSpec.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resources resources = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg.prototype.hasResources = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resources resources = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos.prototype.hasResources = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resources resources = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated HostSpec host_specs = 4;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, 4));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};


/**
 * optional MongoInfra mongoinfra = 5;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingRequest.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.EnableClusterShardingMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shardName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
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
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string shard_name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.GetClusterShardRequest.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    shardsList: jspb.Message.toObjectList(msg.getShardsList(),
    yandex_cloud_mdb_mongodb_v1_cluster_pb.Shard.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse;
  return proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Shard;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Shard.deserializeBinaryFromReader);
      msg.addShards(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Shard.serializeBinaryToWriter
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
 * repeated Shard shards = 1;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Shard>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.getShardsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.Shard>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Shard, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.Shard>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.setShardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Shard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Shard}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.addShards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.mongodb.v1.Shard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.clearShardsList = function() {
  return this.setShardsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ListClusterShardsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.repeatedFields_ = [3];



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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shardName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.mongodb.v1.HostSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinaryFromReader);
      msg.addHostSpecs(value);
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.HostSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string shard_name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated HostSpec host_specs = 3;
 * @return {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.mongodb.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.mdb.mongodb.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shardName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
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
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string shard_name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.AddClusterShardMetadata.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shardName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string shard_name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardRequest.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shardName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
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
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string shard_name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.DeleteClusterShardMetadata.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsRequest.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ResetupHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsRequest.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.RestartHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest;
  return proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsRequest.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata;
  return proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostNames(value);
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
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.StepdownHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
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
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.HostSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoneId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subnetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    assignPublicIp: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    shardName: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.HostSpec;
  return proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssignPublicIp(value);
      break;
    case 4:
      var value = /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setShardName(value);
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
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.HostSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAssignPublicIp();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getShardName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string zone_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subnet_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool assign_public_ip = 3;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.getAssignPublicIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.setAssignPublicIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Host.Type type = 4;
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type}
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.Host.Type} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string shard_name = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.HostSpec.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfig3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfig3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfig3_6.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfig3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfig3_6 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfig3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfig3_6 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig3_6 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig3_6 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfig3_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfig3_6 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfig3_6, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.prototype.hasMongoinfra = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfig4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfig4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfig4_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfig4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfig4_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfig4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfig4_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_0 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfig4_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfig4_0 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfig4_0, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.prototype.hasMongoinfra = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfig4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfig4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfig4_2.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfig4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfig4_2 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfig4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfig4_2 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_2 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_2 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfig4_2, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfig4_2 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfig4_2, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.prototype.hasMongoinfra = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfig4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfig4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfig4_4.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfig4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfig4_4 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfig4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfig4_4 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_4 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_4 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfig4_4, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfig4_4 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfig4_4, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.prototype.hasMongoinfra = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfig4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfig4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfig4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfig4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfig4_4_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfig4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfig4_4_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_4_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig4_4_enterprise config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfig4_4_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfig4_4_enterprise config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfig4_4_enterprise, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.prototype.hasMongoinfra = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfig5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfig5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfig5_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfig5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfig5_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfig5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfig5_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig5_0 config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig5_0 config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfig5_0, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfig5_0 config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfig5_0, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.prototype.hasMongoinfra = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.toObject = function(includeInstance, msg) {
  var f, obj = {
    mongod: (f = msg.getMongod()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.toObject(includeInstance, f),
    mongocfg: (f = msg.getMongocfg()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.toObject(includeInstance, f),
    mongos: (f = msg.getMongos()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.toObject(includeInstance, f),
    mongoinfra: (f = msg.getMongoinfra()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.deserializeBinaryFromReader);
      msg.setMongod(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.deserializeBinaryFromReader);
      msg.setMongocfg(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.deserializeBinaryFromReader);
      msg.setMongos(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMongod();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.serializeBinaryToWriter
    );
  }
  f = message.getMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.serializeBinaryToWriter
    );
  }
  f = message.getMongos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.serializeBinaryToWriter
    );
  }
  f = message.getMongoinfra();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfig5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfig5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfig5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfig5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongodConfig5_0_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfig5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongoCfgConfig5_0_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig5_0_enterprise config = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.getConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.toObject = function(includeInstance, msg) {
  var f, obj = {
    configMongos: (f = msg.getConfigMongos()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise.toObject(includeInstance, f),
    configMongocfg: (f = msg.getConfigMongocfg()) && yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra;
  return proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongos(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise.deserializeBinaryFromReader);
      msg.setConfigMongocfg(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigMongos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getConfigMongocfg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.MongosConfig5_0_enterprise config_mongos = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.getConfigMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfig5_0_enterprise, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.setConfigMongos = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.clearConfigMongos = function() {
  return this.setConfigMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.hasConfigMongos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.MongoCfgConfig5_0_enterprise config_mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.getConfigMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfig5_0_enterprise, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.setConfigMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.clearConfigMongocfg = function() {
  return this.setConfigMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.hasConfigMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Resources resources = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Resources}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Resources, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra.prototype.hasResources = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mongod mongod = 1;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.getMongod = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongod|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.setMongod = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.clearMongod = function() {
  return this.setMongod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.hasMongod = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MongoCfg mongocfg = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.getMongocfg = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoCfg|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.setMongocfg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.clearMongocfg = function() {
  return this.setMongocfg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.hasMongocfg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mongos mongos = 3;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.getMongos = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.Mongos|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.setMongos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.clearMongos = function() {
  return this.setMongos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.hasMongos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MongoInfra mongoinfra = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.getMongoinfra = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.MongoInfra|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.setMongoinfra = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.clearMongoinfra = function() {
  return this.setMongoinfra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.prototype.hasMongoinfra = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_ = [[2,4,7,8,10,11,12]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.MongodbSpecCase = {
  MONGODB_SPEC_NOT_SET: 0,
  MONGODB_SPEC_3_6: 2,
  MONGODB_SPEC_4_0: 4,
  MONGODB_SPEC_4_2: 7,
  MONGODB_SPEC_4_4: 8,
  MONGODB_SPEC_5_0: 10,
  MONGODB_SPEC_4_4_ENTERPRISE: 11,
  MONGODB_SPEC_5_0_ENTERPRISE: 12
};

/**
 * @return {proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.MongodbSpecCase}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpecCase = function() {
  return /** @type {proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.MongodbSpecCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    featureCompatibilityVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mongodbSpec36: (f = msg.getMongodbSpec36()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.toObject(includeInstance, f),
    mongodbSpec40: (f = msg.getMongodbSpec40()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.toObject(includeInstance, f),
    mongodbSpec42: (f = msg.getMongodbSpec42()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.toObject(includeInstance, f),
    mongodbSpec44: (f = msg.getMongodbSpec44()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.toObject(includeInstance, f),
    mongodbSpec50: (f = msg.getMongodbSpec50()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.toObject(includeInstance, f),
    mongodbSpec44Enterprise: (f = msg.getMongodbSpec44Enterprise()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.toObject(includeInstance, f),
    mongodbSpec50Enterprise: (f = msg.getMongodbSpec50Enterprise()) && proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.toObject(includeInstance, f),
    backupWindowStart: (f = msg.getBackupWindowStart()) && google_type_timeofday_pb.TimeOfDay.toObject(includeInstance, f),
    backupRetainPeriodDays: (f = msg.getBackupRetainPeriodDays()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    access: (f = msg.getAccess()) && yandex_cloud_mdb_mongodb_v1_cluster_pb.Access.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec;
  return proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.deserializeBinaryFromReader);
      msg.setMongodbSpec36(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.deserializeBinaryFromReader);
      msg.setMongodbSpec40(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.deserializeBinaryFromReader);
      msg.setMongodbSpec42(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.deserializeBinaryFromReader);
      msg.setMongodbSpec44(value);
      break;
    case 10:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.deserializeBinaryFromReader);
      msg.setMongodbSpec50(value);
      break;
    case 11:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.deserializeBinaryFromReader);
      msg.setMongodbSpec44Enterprise(value);
      break;
    case 12:
      var value = new proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise;
      reader.readMessage(value,proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.deserializeBinaryFromReader);
      msg.setMongodbSpec50Enterprise(value);
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
      var value = new yandex_cloud_mdb_mongodb_v1_cluster_pb.Access;
      reader.readMessage(value,yandex_cloud_mdb_mongodb_v1_cluster_pb.Access.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMongodbSpec36();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6.serializeBinaryToWriter
    );
  }
  f = message.getMongodbSpec40();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0.serializeBinaryToWriter
    );
  }
  f = message.getMongodbSpec42();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2.serializeBinaryToWriter
    );
  }
  f = message.getMongodbSpec44();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4.serializeBinaryToWriter
    );
  }
  f = message.getMongodbSpec50();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0.serializeBinaryToWriter
    );
  }
  f = message.getMongodbSpec44Enterprise();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise.serializeBinaryToWriter
    );
  }
  f = message.getMongodbSpec50Enterprise();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise.serializeBinaryToWriter
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
      yandex_cloud_mdb_mongodb_v1_cluster_pb.Access.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string feature_compatibility_version = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getFeatureCompatibilityVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setFeatureCompatibilityVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional MongodbSpec3_6 mongodb_spec_3_6 = 2;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpec36 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec3_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setMongodbSpec36 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearMongodbSpec36 = function() {
  return this.setMongodbSpec36(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasMongodbSpec36 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MongodbSpec4_0 mongodb_spec_4_0 = 4;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpec40 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setMongodbSpec40 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearMongodbSpec40 = function() {
  return this.setMongodbSpec40(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasMongodbSpec40 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MongodbSpec4_2 mongodb_spec_4_2 = 7;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpec42 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2, 7));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_2|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setMongodbSpec42 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearMongodbSpec42 = function() {
  return this.setMongodbSpec42(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasMongodbSpec42 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MongodbSpec4_4 mongodb_spec_4_4 = 8;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpec44 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4, 8));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setMongodbSpec44 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearMongodbSpec44 = function() {
  return this.setMongodbSpec44(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasMongodbSpec44 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MongodbSpec5_0 mongodb_spec_5_0 = 10;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpec50 = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0, 10));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setMongodbSpec50 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearMongodbSpec50 = function() {
  return this.setMongodbSpec50(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasMongodbSpec50 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MongodbSpec4_4_enterprise mongodb_spec_4_4_enterprise = 11;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpec44Enterprise = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise, 11));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec4_4_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setMongodbSpec44Enterprise = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearMongodbSpec44Enterprise = function() {
  return this.setMongodbSpec44Enterprise(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasMongodbSpec44Enterprise = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MongodbSpec5_0_enterprise mongodb_spec_5_0_enterprise = 12;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getMongodbSpec50Enterprise = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise, 12));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.MongodbSpec5_0_enterprise|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setMongodbSpec50Enterprise = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearMongodbSpec50Enterprise = function() {
  return this.setMongodbSpec50Enterprise(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasMongodbSpec50Enterprise = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.type.TimeOfDay backup_window_start = 3;
 * @return {?proto.google.type.TimeOfDay}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getBackupWindowStart = function() {
  return /** @type{?proto.google.type.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, google_type_timeofday_pb.TimeOfDay, 3));
};


/**
 * @param {?proto.google.type.TimeOfDay|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setBackupWindowStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearBackupWindowStart = function() {
  return this.setBackupWindowStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasBackupWindowStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int64Value backup_retain_period_days = 9;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getBackupRetainPeriodDays = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 9));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setBackupRetainPeriodDays = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearBackupRetainPeriodDays = function() {
  return this.setBackupRetainPeriodDays(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasBackupRetainPeriodDays = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Access access = 6;
 * @return {?proto.yandex.cloud.mdb.mongodb.v1.Access}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.getAccess = function() {
  return /** @type{?proto.yandex.cloud.mdb.mongodb.v1.Access} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_mongodb_v1_cluster_pb.Access, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.mongodb.v1.Access|undefined} value
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.clearAccess = function() {
  return this.setAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.mongodb.v1.ConfigSpec.prototype.hasAccess = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.yandex.cloud.mdb.mongodb.v1);
