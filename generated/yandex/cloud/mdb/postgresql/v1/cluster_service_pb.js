// source: yandex/cloud/mdb/postgresql/v1/cluster_service.proto
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
var yandex_cloud_mdb_postgresql_v1_backup_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/backup_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_backup_pb);
var yandex_cloud_mdb_postgresql_v1_cluster_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/cluster_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_cluster_pb);
var yandex_cloud_mdb_postgresql_v1_database_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/database_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_database_pb);
var yandex_cloud_mdb_postgresql_v1_user_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/user_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_user_pb);
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
var yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb);
var yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb);
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
var yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb);
var yandex_cloud_mdb_postgresql_v1_config_host13_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/config/host13_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_config_host13_pb);
var yandex_cloud_mdb_postgresql_v1_maintenance_pb = require('../../../../../yandex/cloud/mdb/postgresql/v1/maintenance_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_postgresql_v1_maintenance_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.PostgresqlConfigCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.PostgresqlConfigCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.HostSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.ServiceType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.LogRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.RescheduleType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.ServiceType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec', null, global);
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
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse';
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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.LogRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.LogRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.LogRecord.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.LogRecord';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse';
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
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord';
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
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse';
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
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest';
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata';
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec';
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
proto.yandex.cloud.mdb.postgresql.v1.HostSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.HostSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.HostSpec.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.HostSpec';
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
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec';
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
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.displayName = 'proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec';
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
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.GetClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    yandex_cloud_mdb_postgresql_v1_cluster_pb.Cluster.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_postgresql_v1_cluster_pb.Cluster;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_cluster_pb.Cluster.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_postgresql_v1_cluster_pb.Cluster.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Cluster>}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.Cluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_postgresql_v1_cluster_pb.Cluster, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Cluster>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.postgresql.v1.Cluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClustersResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.repeatedFields_ = [7,8,9,11];



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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 5, 0),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.toObject(includeInstance, f),
    databaseSpecsList: jspb.Message.toObjectList(msg.getDatabaseSpecsList(),
    yandex_cloud_mdb_postgresql_v1_database_pb.DatabaseSpec.toObject, includeInstance),
    userSpecsList: jspb.Message.toObjectList(msg.getUserSpecsList(),
    yandex_cloud_mdb_postgresql_v1_user_pb.UserSpec.toObject, includeInstance),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.postgresql.v1.HostSpec.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} */ (reader.readEnum());
      msg.setEnvironment(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 7:
      var value = new yandex_cloud_mdb_postgresql_v1_database_pb.DatabaseSpec;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_database_pb.DatabaseSpec.deserializeBinaryFromReader);
      msg.addDatabaseSpecs(value);
      break;
    case 8:
      var value = new yandex_cloud_mdb_postgresql_v1_user_pb.UserSpec;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_user_pb.UserSpec.deserializeBinaryFromReader);
      msg.addUserSpecs(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.HostSpec.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.serializeBinaryToWriter
    );
  }
  f = message.getDatabaseSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      yandex_cloud_mdb_postgresql_v1_database_pb.DatabaseSpec.serializeBinaryToWriter
    );
  }
  f = message.getUserSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      yandex_cloud_mdb_postgresql_v1_user_pb.UserSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.HostSpec.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Cluster.Environment environment = 5;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ConfigSpec config_spec = 6;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated DatabaseSpec database_specs = 7;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.DatabaseSpec>}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getDatabaseSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.DatabaseSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_postgresql_v1_database_pb.DatabaseSpec, 7));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.DatabaseSpec>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setDatabaseSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DatabaseSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DatabaseSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.addDatabaseSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yandex.cloud.mdb.postgresql.v1.DatabaseSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.clearDatabaseSpecsList = function() {
  return this.setDatabaseSpecsList([]);
};


/**
 * repeated UserSpec user_specs = 8;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.UserSpec>}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getUserSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.UserSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_postgresql_v1_user_pb.UserSpec, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.UserSpec>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setUserSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UserSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UserSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.addUserSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.mdb.postgresql.v1.UserSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.clearUserSpecsList = function() {
  return this.setUserSpecsList([]);
};


/**
 * repeated HostSpec host_specs = 9;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.HostSpec, 9));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yandex.cloud.mdb.postgresql.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};


/**
 * optional string network_id = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string security_group_ids = 11;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional bool deletion_protection = 12;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.prototype.setDeletionProtection = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.repeatedFields_ = [8];



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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    maintenanceWindow: (f = msg.getMaintenanceWindow()) && yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow.toObject(includeInstance, f),
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = new yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.serializeBinaryToWriter
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
      yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow.serializeBinaryToWriter
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional ConfigSpec config_spec = 5;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional MaintenanceWindow maintenance_window = 7;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow, 7));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.MaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setMaintenanceWindow = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.clearMaintenanceWindow = function() {
  return this.setMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.hasMaintenanceWindow = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string security_group_ids = 8;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional bool deletion_protection = 9;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.prototype.setDeletionProtection = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StopClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterRequest.prototype.setDestinationFolderId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.getSourceFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.setSourceFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_folder_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata.prototype.setDestinationFolderId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.repeatedFields_ = [9,12];



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
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeInclusive: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 7, 0),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.toObject(includeInstance, f),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.postgresql.v1.HostSpec.toObject, includeInstance),
    networkId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTimeInclusive(value);
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
      var value = new proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.HostSpec.deserializeBinaryFromReader);
      msg.addHostSpecs(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 12:
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
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeInclusive();
  if (f) {
    writer.writeBool(
      3,
      f
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
  f = message.getConfigSpec();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.HostSpec.serializeBinaryToWriter
    );
  }
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setBackupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool time_inclusive = 3;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getTimeInclusive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setTimeInclusive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Cluster.Environment environment = 7;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional ConfigSpec config_spec = 8;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec, 8));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated HostSpec host_specs = 9;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.HostSpec, 9));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yandex.cloud.mdb.postgresql.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};


/**
 * optional string network_id = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string folder_id = 11;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated string security_group_ids = 12;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.prototype.clearSecurityGroupIdsList = function() {
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
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string backup_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata.prototype.setBackupId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setHostName(value);
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostName();
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host_name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.prototype.getHostName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest.prototype.setHostName = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.RescheduleType} */ (reader.readEnum());
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.RescheduleType = {
  RESCHEDULE_TYPE_UNSPECIFIED: 0,
  IMMEDIATE: 1,
  NEXT_AVAILABLE_WINDOW: 2,
  SPECIFIC_TIME: 3
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RescheduleType reschedule_type = 2;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.RescheduleType}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.getRescheduleType = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.RescheduleType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.RescheduleType} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.setRescheduleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp delayed_until = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.getDelayedUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.setDelayedUntil = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.clearDelayedUntil = function() {
  return this.setDelayedUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest.prototype.hasDelayedUntil = function() {
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp delayed_until = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.getDelayedUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.setDelayedUntil = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.clearDelayedUntil = function() {
  return this.setDelayedUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata.prototype.hasDelayedUntil = function() {
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
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.LogRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord}
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.LogRecord;
  return proto.yandex.cloud.mdb.postgresql.v1.LogRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord}
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.LogRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, string> message = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.getMessageMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.LogRecord.prototype.clearMessageMap = function() {
  this.getMessageMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    columnFilterList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    serviceType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fromTime: (f = msg.getFromTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    toTime: (f = msg.getToTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, ""),
    alwaysNextPageToken: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.ServiceType} */ (reader.readEnum());
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
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysNextPageToken(value);
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAlwaysNextPageToken();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.ServiceType = {
  SERVICE_TYPE_UNSPECIFIED: 0,
  POSTGRESQL: 1,
  POOLER: 2
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string column_filter = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getColumnFilterList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setColumnFilterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.addColumnFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.clearColumnFilterList = function() {
  return this.setColumnFilterList([]);
};


/**
 * optional ServiceType service_type = 3;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.ServiceType}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getServiceType = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.ServiceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.ServiceType} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setServiceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp from_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getFromTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.clearFromTime = function() {
  return this.setFromTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp to_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getToTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setToTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.clearToTime = function() {
  return this.setToTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 page_size = 6;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool always_next_page_token = 8;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.getAlwaysNextPageToken = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest.prototype.setAlwaysNextPageToken = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.yandex.cloud.mdb.postgresql.v1.LogRecord.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.LogRecord;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.LogRecord.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.LogRecord.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.LogRecord>}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.LogRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.LogRecord, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.LogRecord>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.LogRecord}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.postgresql.v1.LogRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: (f = msg.getRecord()) && proto.yandex.cloud.mdb.postgresql.v1.LogRecord.toObject(includeInstance, f),
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord;
  return proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.LogRecord;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.LogRecord.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.LogRecord.serializeBinaryToWriter
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
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.LogRecord}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.getRecord = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.LogRecord} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.LogRecord, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.LogRecord|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.setRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.clearRecord = function() {
  return this.setRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.hasRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string next_record_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.getNextRecordToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamLogRecord.prototype.setNextRecordToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.ServiceType} */ (reader.readEnum());
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
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.ServiceType = {
  SERVICE_TYPE_UNSPECIFIED: 0,
  POSTGRESQL: 1,
  POOLER: 2
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string column_filter = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.getColumnFilterList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.setColumnFilterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.addColumnFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.clearColumnFilterList = function() {
  return this.setColumnFilterList([]);
};


/**
 * optional ServiceType service_type = 3;
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.ServiceType}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.getServiceType = function() {
  return /** @type {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.ServiceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.ServiceType} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.setServiceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp from_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.getFromTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.clearFromTime = function() {
  return this.setFromTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp to_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.getToTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.setToTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.clearToTime = function() {
  return this.setToTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string record_token = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.getRecordToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.setRecordToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string filter = 7;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest.prototype.setFilter = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.operation.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_operation_operation_pb.Operation, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.operation.Operation>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.operation.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.operation.Operation}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.operation.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupsList: jspb.Message.toObjectList(msg.getBackupsList(),
    yandex_cloud_mdb_postgresql_v1_backup_pb.Backup.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_postgresql_v1_backup_pb.Backup;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_backup_pb.Backup.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_postgresql_v1_backup_pb.Backup.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Backup>}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.getBackupsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.Backup>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_postgresql_v1_backup_pb.Backup, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Backup>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.setBackupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Backup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Backup}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.addBackups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.postgresql.v1.Backup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.clearBackupsList = function() {
  return this.setBackupsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostsList: jspb.Message.toObjectList(msg.getHostsList(),
    yandex_cloud_mdb_postgresql_v1_cluster_pb.Host.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse;
  return proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_postgresql_v1_cluster_pb.Host;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_cluster_pb.Host.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_postgresql_v1_cluster_pb.Host.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Host>}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.getHostsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.Host>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_postgresql_v1_cluster_pb.Host, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.Host>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.setHostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.Host=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.Host}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.addHosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.postgresql.v1.Host, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.clearHostsList = function() {
  return this.setHostsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.postgresql.v1.HostSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.postgresql.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.HostSpec.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.postgresql.v1.HostSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated HostSpec host_specs = 2;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.HostSpec, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.mdb.postgresql.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateHostSpecsList: jspb.Message.toObjectList(msg.getUpdateHostSpecsList(),
    proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest;
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.deserializeBinaryFromReader);
      msg.addUpdateHostSpecs(value);
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdateHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated UpdateHostSpec update_host_specs = 2;
 * @return {!Array<!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec>}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.getUpdateHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.setUpdateHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.addUpdateHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest.prototype.clearUpdateHostSpecsList = function() {
  return this.setUpdateHostSpecsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata;
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata.prototype.clearHostNamesList = function() {
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    replicationSource: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priority: (f = msg.getPriority()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    assignPublicIp: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec;
  return proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplicationSource(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPriority(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssignPublicIp(value);
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
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReplicationSource();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getConfigSpec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAssignPublicIp();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string host_name = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.getHostName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.setHostName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string replication_source = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.getReplicationSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.setReplicationSource = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Int64Value priority = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.getPriority = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.setPriority = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.clearPriority = function() {
  return this.setPriority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConfigHostSpec config_spec = 4;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool assign_public_ip = 6;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.getAssignPublicIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.UpdateHostSpec.prototype.setAssignPublicIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.HostSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoneId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subnetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    assignPublicIp: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    replicationSource: jspb.Message.getFieldWithDefault(msg, 4, ""),
    priority: (f = msg.getPriority()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.HostSpec;
  return proto.yandex.cloud.mdb.postgresql.v1.HostSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setReplicationSource(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPriority(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
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
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.HostSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getReplicationSource();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPriority();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getConfigSpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string zone_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subnet_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool assign_public_ip = 3;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.getAssignPublicIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.setAssignPublicIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string replication_source = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.getReplicationSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.setReplicationSource = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Int64Value priority = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.getPriority = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.setPriority = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.clearPriority = function() {
  return this.setPriority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ConfigHostSpec config_spec = 6;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.HostSpec.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_ = [[2,10,3,7,13,11,14,15]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.PostgresqlConfigCase = {
  POSTGRESQL_CONFIG_NOT_SET: 0,
  POSTGRESQL_CONFIG_9_6: 2,
  POSTGRESQL_CONFIG_10_1C: 10,
  POSTGRESQL_CONFIG_10: 3,
  POSTGRESQL_CONFIG_11: 7,
  POSTGRESQL_CONFIG_11_1C: 13,
  POSTGRESQL_CONFIG_12: 11,
  POSTGRESQL_CONFIG_12_1C: 14,
  POSTGRESQL_CONFIG_13: 15
};

/**
 * @return {proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.PostgresqlConfigCase}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfigCase = function() {
  return /** @type {proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.PostgresqlConfigCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postgresqlConfig96: (f = msg.getPostgresqlConfig96()) && yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfig9_6.toObject(includeInstance, f),
    postgresqlConfig101c: (f = msg.getPostgresqlConfig101c()) && yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfig10_1C.toObject(includeInstance, f),
    postgresqlConfig10: (f = msg.getPostgresqlConfig10()) && yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfig10.toObject(includeInstance, f),
    postgresqlConfig11: (f = msg.getPostgresqlConfig11()) && yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfig11.toObject(includeInstance, f),
    postgresqlConfig111c: (f = msg.getPostgresqlConfig111c()) && yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfig11_1C.toObject(includeInstance, f),
    postgresqlConfig12: (f = msg.getPostgresqlConfig12()) && yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfig12.toObject(includeInstance, f),
    postgresqlConfig121c: (f = msg.getPostgresqlConfig121c()) && yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfig12_1C.toObject(includeInstance, f),
    postgresqlConfig13: (f = msg.getPostgresqlConfig13()) && yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfig13.toObject(includeInstance, f),
    poolerConfig: (f = msg.getPoolerConfig()) && yandex_cloud_mdb_postgresql_v1_cluster_pb.ConnectionPoolerConfig.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_postgresql_v1_cluster_pb.Resources.toObject(includeInstance, f),
    autofailover: (f = msg.getAutofailover()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    backupWindowStart: (f = msg.getBackupWindowStart()) && google_type_timeofday_pb.TimeOfDay.toObject(includeInstance, f),
    backupRetainPeriodDays: (f = msg.getBackupRetainPeriodDays()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    access: (f = msg.getAccess()) && yandex_cloud_mdb_postgresql_v1_cluster_pb.Access.toObject(includeInstance, f),
    performanceDiagnostics: (f = msg.getPerformanceDiagnostics()) && yandex_cloud_mdb_postgresql_v1_cluster_pb.PerformanceDiagnostics.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec;
  return proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfig9_6;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfig9_6.deserializeBinaryFromReader);
      msg.setPostgresqlConfig96(value);
      break;
    case 10:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfig10_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfig10_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig101c(value);
      break;
    case 3:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfig10;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfig10.deserializeBinaryFromReader);
      msg.setPostgresqlConfig10(value);
      break;
    case 7:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfig11;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfig11.deserializeBinaryFromReader);
      msg.setPostgresqlConfig11(value);
      break;
    case 13:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfig11_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfig11_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig111c(value);
      break;
    case 11:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfig12;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfig12.deserializeBinaryFromReader);
      msg.setPostgresqlConfig12(value);
      break;
    case 14:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfig12_1C;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfig12_1C.deserializeBinaryFromReader);
      msg.setPostgresqlConfig121c(value);
      break;
    case 15:
      var value = new yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfig13;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfig13.deserializeBinaryFromReader);
      msg.setPostgresqlConfig13(value);
      break;
    case 4:
      var value = new yandex_cloud_mdb_postgresql_v1_cluster_pb.ConnectionPoolerConfig;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_cluster_pb.ConnectionPoolerConfig.deserializeBinaryFromReader);
      msg.setPoolerConfig(value);
      break;
    case 5:
      var value = new yandex_cloud_mdb_postgresql_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_cluster_pb.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAutofailover(value);
      break;
    case 8:
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
      var value = new yandex_cloud_mdb_postgresql_v1_cluster_pb.Access;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_cluster_pb.Access.deserializeBinaryFromReader);
      msg.setAccess(value);
      break;
    case 12:
      var value = new yandex_cloud_mdb_postgresql_v1_cluster_pb.PerformanceDiagnostics;
      reader.readMessage(value,yandex_cloud_mdb_postgresql_v1_cluster_pb.PerformanceDiagnostics.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.serializeBinaryToWriter = function(message, writer) {
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
      yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfig9_6.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig101c();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfig10_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig10();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfig10.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig11();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfig11.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig111c();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfig11_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig12();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfig12.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig121c();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfig12_1C.serializeBinaryToWriter
    );
  }
  f = message.getPostgresqlConfig13();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfig13.serializeBinaryToWriter
    );
  }
  f = message.getPoolerConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      yandex_cloud_mdb_postgresql_v1_cluster_pb.ConnectionPoolerConfig.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      yandex_cloud_mdb_postgresql_v1_cluster_pb.Resources.serializeBinaryToWriter
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
      8,
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
      yandex_cloud_mdb_postgresql_v1_cluster_pb.Access.serializeBinaryToWriter
    );
  }
  f = message.getPerformanceDiagnostics();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      yandex_cloud_mdb_postgresql_v1_cluster_pb.PerformanceDiagnostics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional config.PostgresqlConfig9_6 postgresql_config_9_6 = 2;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig96 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfig9_6, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig96 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig96 = function() {
  return this.setPostgresqlConfig96(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig96 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional config.PostgresqlConfig10_1C postgresql_config_10_1c = 10;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig101c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfig10_1C, 10));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig101c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig101c = function() {
  return this.setPostgresqlConfig101c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig101c = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional config.PostgresqlConfig10 postgresql_config_10 = 3;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig10 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfig10, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig10 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig10 = function() {
  return this.setPostgresqlConfig10(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig10 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional config.PostgresqlConfig11 postgresql_config_11 = 7;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig11}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig11 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig11} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfig11, 7));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig11|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig11 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig11 = function() {
  return this.setPostgresqlConfig11(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig11 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional config.PostgresqlConfig11_1C postgresql_config_11_1c = 13;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig11_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig111c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig11_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfig11_1C, 13));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig11_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig111c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig111c = function() {
  return this.setPostgresqlConfig111c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig111c = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional config.PostgresqlConfig12 postgresql_config_12 = 11;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig12 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfig12, 11));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig12 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig12 = function() {
  return this.setPostgresqlConfig12(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig12 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional config.PostgresqlConfig12_1C postgresql_config_12_1c = 14;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig121c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfig12_1C, 14));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig121c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig121c = function() {
  return this.setPostgresqlConfig121c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig121c = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional config.PostgresqlConfig13 postgresql_config_13 = 15;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig13}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPostgresqlConfig13 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig13} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfig13, 15));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig13|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPostgresqlConfig13 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPostgresqlConfig13 = function() {
  return this.setPostgresqlConfig13(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPostgresqlConfig13 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ConnectionPoolerConfig pooler_config = 4;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPoolerConfig = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_cluster_pb.ConnectionPoolerConfig, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPoolerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPoolerConfig = function() {
  return this.setPoolerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPoolerConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Resources resources = 5;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.Resources}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_cluster_pb.Resources, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasResources = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue autofailover = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getAutofailover = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setAutofailover = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearAutofailover = function() {
  return this.setAutofailover(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasAutofailover = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.type.TimeOfDay backup_window_start = 8;
 * @return {?proto.google.type.TimeOfDay}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getBackupWindowStart = function() {
  return /** @type{?proto.google.type.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, google_type_timeofday_pb.TimeOfDay, 8));
};


/**
 * @param {?proto.google.type.TimeOfDay|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setBackupWindowStart = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearBackupWindowStart = function() {
  return this.setBackupWindowStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasBackupWindowStart = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Int64Value backup_retain_period_days = 17;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getBackupRetainPeriodDays = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 17));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setBackupRetainPeriodDays = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearBackupRetainPeriodDays = function() {
  return this.setBackupRetainPeriodDays(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasBackupRetainPeriodDays = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Access access = 9;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.Access}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getAccess = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.Access} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_cluster_pb.Access, 9));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.Access|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearAccess = function() {
  return this.setAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasAccess = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PerformanceDiagnostics performance_diagnostics = 12;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.getPerformanceDiagnostics = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_cluster_pb.PerformanceDiagnostics, 12));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.setPerformanceDiagnostics = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.clearPerformanceDiagnostics = function() {
  return this.setPerformanceDiagnostics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigSpec.prototype.hasPerformanceDiagnostics = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_ = [[1,4,2,3,6,5,7,8]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.PostgresqlConfigCase = {
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
 * @return {proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.PostgresqlConfigCase}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfigCase = function() {
  return /** @type {proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.PostgresqlConfigCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec;
  return proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig96 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig96 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig96 = function() {
  return this.setPostgresqlConfig96(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig96 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional config.PostgresqlHostConfig10_1C postgresql_config_10_1c = 4;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig101c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C, 4));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig101c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig101c = function() {
  return this.setPostgresqlConfig101c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig101c = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional config.PostgresqlHostConfig10 postgresql_config_10 = 2;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig10 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig10 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig10 = function() {
  return this.setPostgresqlConfig10(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig10 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional config.PostgresqlHostConfig11 postgresql_config_11 = 3;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig11 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11, 3));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig11 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig11 = function() {
  return this.setPostgresqlConfig11(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig11 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional config.PostgresqlHostConfig11_1C postgresql_config_11_1c = 6;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig111c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig11_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig111c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig111c = function() {
  return this.setPostgresqlConfig111c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig111c = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional config.PostgresqlHostConfig12 postgresql_config_12 = 5;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig12 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig12 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig12 = function() {
  return this.setPostgresqlConfig12(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig12 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional config.PostgresqlHostConfig12_1C postgresql_config_12_1c = 7;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig121c = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C, 7));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig12_1C|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig121c = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig121c = function() {
  return this.setPostgresqlConfig121c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig121c = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional config.PostgresqlHostConfig13 postgresql_config_13 = 8;
 * @return {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig13}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.getPostgresqlConfig13 = function() {
  return /** @type{?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig13} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13, 8));
};


/**
 * @param {?proto.yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig13|undefined} value
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
*/
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.setPostgresqlConfig13 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec} returns this
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.clearPostgresqlConfig13 = function() {
  return this.setPostgresqlConfig13(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.postgresql.v1.ConfigHostSpec.prototype.hasPostgresqlConfig13 = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.yandex.cloud.mdb.postgresql.v1);
