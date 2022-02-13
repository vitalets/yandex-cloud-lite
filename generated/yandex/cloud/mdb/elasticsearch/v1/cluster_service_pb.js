// source: yandex/cloud/mdb/elasticsearch/v1/cluster_service.proto
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
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
goog.object.extend(proto, yandex_cloud_api_operation_pb);
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
goog.object.extend(proto, yandex_cloud_operation_operation_pb);
var yandex_cloud_mdb_elasticsearch_v1_backup_pb = require('../../../../../yandex/cloud/mdb/elasticsearch/v1/backup_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_elasticsearch_v1_backup_pb);
var yandex_cloud_mdb_elasticsearch_v1_cluster_pb = require('../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_elasticsearch_v1_cluster_pb);
var yandex_cloud_mdb_elasticsearch_v1_user_pb = require('../../../../../yandex/cloud/mdb/elasticsearch/v1/user_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_elasticsearch_v1_user_pb);
var yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb = require('../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb);
var yandex_cloud_mdb_elasticsearch_v1_maintenance_pb = require('../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance_pb.js');
goog.object.extend(proto, yandex_cloud_mdb_elasticsearch_v1_maintenance_pb);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.ConfigCase', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.ServiceType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.RescheduleType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.ServiceType', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest', null, global);
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
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse';
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
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse';
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
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord';
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
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse';
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate';
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
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest';
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.displayName = 'proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse';
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
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Cluster.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Cluster;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Cluster.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Cluster.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Cluster, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.Cluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.repeatedFields_ = [8,9,11];



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
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 5, 0),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.toObject(includeInstance, f),
    userSpecsList: jspb.Message.toObjectList(msg.getUserSpecsList(),
    yandex_cloud_mdb_elasticsearch_v1_user_pb.UserSpec.toObject, includeInstance),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.toObject, includeInstance),
    networkId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    maintenanceWindow: (f = msg.getMaintenanceWindow()) && yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment} */ (reader.readEnum());
      msg.setEnvironment(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 8:
      var value = new yandex_cloud_mdb_elasticsearch_v1_user_pb.UserSpec;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_user_pb.UserSpec.deserializeBinaryFromReader);
      msg.addUserSpecs(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.deserializeBinaryFromReader);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeletionProtection(value);
      break;
    case 14:
      var value = new yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow.deserializeBinaryFromReader);
      msg.setMaintenanceWindow(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.serializeBinaryToWriter
    );
  }
  f = message.getUserSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      yandex_cloud_mdb_elasticsearch_v1_user_pb.UserSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.serializeBinaryToWriter
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
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDeletionProtection();
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
      yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Cluster.Environment environment = 5;
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ConfigSpec config_spec = 6;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated UserSpec user_specs = 8;
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.UserSpec>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getUserSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.UserSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_user_pb.UserSpec, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.UserSpec>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setUserSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.UserSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UserSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.addUserSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.UserSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.clearUserSpecsList = function() {
  return this.setUserSpecsList([]);
};


/**
 * repeated HostSpec host_specs = 9;
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec, 9));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};


/**
 * optional string network_id = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string security_group_ids = 11;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional string service_account_id = 12;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool deletion_protection = 13;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional MaintenanceWindow maintenance_window = 14;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.getMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.MaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow, 14));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.MaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.setMaintenanceWindow = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.clearMaintenanceWindow = function() {
  return this.setMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.prototype.hasMaintenanceWindow = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.repeatedFields_ = [7];



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
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    maintenanceWindow: (f = msg.getMaintenanceWindow()) && yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeletionProtection(value);
      break;
    case 10:
      var value = new yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow.deserializeBinaryFromReader);
      msg.setMaintenanceWindow(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional ConfigSpecUpdate config_spec = 5;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate, 5));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string security_group_ids = 7;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional string service_account_id = 8;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool deletion_protection = 9;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional MaintenanceWindow maintenance_window = 10;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.MaintenanceWindow}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.getMaintenanceWindow = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.MaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_maintenance_pb.MaintenanceWindow, 10));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.MaintenanceWindow|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.setMaintenanceWindow = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.clearMaintenanceWindow = function() {
  return this.setMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.prototype.hasMaintenanceWindow = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    columnFilterList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    fromTime: (f = msg.getFromTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    toTime: (f = msg.getToTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    alwaysNextPageToken: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    filter: jspb.Message.getFieldWithDefault(msg, 8, ""),
    serviceType: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTime(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysNextPageToken(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 9:
      var value = /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.ServiceType} */ (reader.readEnum());
      msg.setServiceType(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getFromTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAlwaysNextPageToken();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getServiceType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.ServiceType = {
  SERVICE_TYPE_UNSPECIFIED: 0,
  ELASTICSEARCH: 1,
  KIBANA: 2
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string column_filter = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getColumnFilterList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setColumnFilterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.addColumnFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.clearColumnFilterList = function() {
  return this.setColumnFilterList([]);
};


/**
 * optional google.protobuf.Timestamp from_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getFromTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.clearFromTime = function() {
  return this.setFromTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp to_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getToTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setToTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.clearToTime = function() {
  return this.setToTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 page_size = 5;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool always_next_page_token = 7;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getAlwaysNextPageToken = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setAlwaysNextPageToken = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string filter = 8;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional ServiceType service_type = 9;
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.ServiceType}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.getServiceType = function() {
  return /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.ServiceType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.ServiceType} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest.prototype.setServiceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord;
  return proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, string> message = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.getMessageMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.prototype.clearMessageMap = function() {
  this.getMessageMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: (f = msg.getRecord()) && proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.toObject(includeInstance, f),
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord;
  return proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord.serializeBinaryToWriter
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
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.getRecord = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.LogRecord|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.setRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.clearRecord = function() {
  return this.setRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.hasRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string next_record_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.getNextRecordToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord.prototype.setNextRecordToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    columnFilterList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    fromTime: (f = msg.getFromTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    toTime: (f = msg.getToTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    recordToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 6, ""),
    serviceType: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTime(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 7:
      var value = /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.ServiceType} */ (reader.readEnum());
      msg.setServiceType(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getFromTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRecordToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getServiceType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.ServiceType = {
  SERVICE_TYPE_UNSPECIFIED: 0,
  ELASTICSEARCH: 1,
  KIBANA: 2
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string column_filter = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.getColumnFilterList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.setColumnFilterList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.addColumnFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.clearColumnFilterList = function() {
  return this.setColumnFilterList([]);
};


/**
 * optional google.protobuf.Timestamp from_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.getFromTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.clearFromTime = function() {
  return this.setFromTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp to_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.getToTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.setToTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.clearToTime = function() {
  return this.setToTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string record_token = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.getRecordToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.setRecordToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string filter = 6;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ServiceType service_type = 7;
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.ServiceType}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.getServiceType = function() {
  return /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.ServiceType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.ServiceType} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest.prototype.setServiceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.operation.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_operation_operation_pb.Operation, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.operation.Operation>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.operation.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.operation.Operation}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.operation.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostsList: jspb.Message.toObjectList(msg.getHostsList(),
    yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Host.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Host;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Host.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Host.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Host>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.getHostsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Host>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Host, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Host>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.setHostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.Host=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.Host}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.addHosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.Host, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.clearHostsList = function() {
  return this.setHostsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest.prototype.setDestinationFolderId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.getSourceFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.setSourceFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_folder_id = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.getDestinationFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata.prototype.setDestinationFolderId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec;
  return proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.Host.Type} */ (reader.readEnum());
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
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subnet_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool assign_public_ip = 3;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.getAssignPublicIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.setAssignPublicIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Host.Type type = 4;
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.Host.Type}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.Host.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.Host.Type} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string shard_name = 5;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.getShardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.prototype.setShardName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.repeatedFields_ = [3];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataNode: (f = msg.getDataNode()) && proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.toObject(includeInstance, f),
    masterNode: (f = msg.getMasterNode()) && proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.toObject(includeInstance, f),
    pluginsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.deserializeBinaryFromReader);
      msg.setDataNode(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.deserializeBinaryFromReader);
      msg.setMasterNode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlugins(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataNode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.serializeBinaryToWriter
    );
  }
  f = message.getMasterNode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.serializeBinaryToWriter
    );
  }
  f = message.getPluginsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.ConfigCase = {
  CONFIG_NOT_SET: 0,
  ELASTICSEARCH_CONFIG_7: 1
};

/**
 * @return {proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.ConfigCase}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.getConfigCase = function() {
  return /** @type {proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.ConfigCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.oneofGroups_[0]));
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    elasticsearchConfig7: (f = msg.getElasticsearchConfig7()) && yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfig7.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfig7;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfig7.deserializeBinaryFromReader);
      msg.setElasticsearchConfig7(value);
      break;
    case 2:
      var value = new yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElasticsearchConfig7();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfig7.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional config.ElasticsearchConfig7 elasticsearch_config_7 = 1;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.getElasticsearchConfig7 = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfig7, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.setElasticsearchConfig7 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.clearElasticsearchConfig7 = function() {
  return this.setElasticsearchConfig7(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.hasElasticsearchConfig7 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Resources resources = 2;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.Resources}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode.prototype.hasResources = function() {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    resources: (f = msg.getResources()) && yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources.serializeBinaryToWriter
    );
  }
};


/**
 * optional Resources resources = 1;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.Resources}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_cluster_pb.Resources, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode.prototype.hasResources = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DataNode data_node = 1;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.getDataNode = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode, 1));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.setDataNode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.clearDataNode = function() {
  return this.setDataNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.hasDataNode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MasterNode master_node = 2;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.getMasterNode = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.setMasterNode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.clearMasterNode = function() {
  return this.setMasterNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.hasMasterNode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string plugins = 3;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.getPluginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.setPluginsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.addPlugins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.prototype.clearPluginsList = function() {
  return this.setPluginsList([]);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    elasticsearchSpec: (f = msg.getElasticsearchSpec()) && proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.toObject(includeInstance, f),
    edition: jspb.Message.getFieldWithDefault(msg, 3, ""),
    adminPassword: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.deserializeBinaryFromReader);
      msg.setElasticsearchSpec(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEdition(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminPassword(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getElasticsearchSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.serializeBinaryToWriter
    );
  }
  f = message.getEdition();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdminPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ElasticsearchSpec elasticsearch_spec = 2;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.getElasticsearchSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.setElasticsearchSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.clearElasticsearchSpec = function() {
  return this.setElasticsearchSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.hasElasticsearchSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string edition = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.getEdition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.setEdition = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string admin_password = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.getAdminPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.prototype.setAdminPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    elasticsearchSpec: (f = msg.getElasticsearchSpec()) && proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.toObject(includeInstance, f),
    edition: jspb.Message.getFieldWithDefault(msg, 3, ""),
    adminPassword: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.deserializeBinaryFromReader);
      msg.setElasticsearchSpec(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEdition(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminPassword(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getElasticsearchSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.serializeBinaryToWriter
    );
  }
  f = message.getEdition();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdminPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ElasticsearchSpec elasticsearch_spec = 2;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.getElasticsearchSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.setElasticsearchSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.clearElasticsearchSpec = function() {
  return this.setElasticsearchSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.hasElasticsearchSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string edition = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.getEdition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.setEdition = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string admin_password = 4;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.getAdminPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate.prototype.setAdminPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated HostSpec host_specs = 2;
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest.prototype.clearHostNamesList = function() {
  return this.setHostNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.repeatedFields_ = [2];



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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string host_names = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.getHostNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.setHostNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.addHostNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata.prototype.clearHostNamesList = function() {
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.RescheduleType} */ (reader.readEnum());
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.RescheduleType = {
  RESCHEDULE_TYPE_UNSPECIFIED: 0,
  IMMEDIATE: 1,
  NEXT_AVAILABLE_WINDOW: 2,
  SPECIFIC_TIME: 3
};

/**
 * optional string cluster_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RescheduleType reschedule_type = 2;
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.RescheduleType}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.getRescheduleType = function() {
  return /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.RescheduleType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.RescheduleType} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.setRescheduleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp delayed_until = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.getDelayedUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.setDelayedUntil = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.clearDelayedUntil = function() {
  return this.setDelayedUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest.prototype.hasDelayedUntil = function() {
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp delayed_until = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.getDelayedUntil = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.setDelayedUntil = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.clearDelayedUntil = function() {
  return this.setDelayedUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata.prototype.hasDelayedUntil = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.repeatedFields_ = [9,11];



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
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    environment: jspb.Message.getFieldWithDefault(msg, 5, 0),
    configSpec: (f = msg.getConfigSpec()) && proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.toObject(includeInstance, f),
    hostSpecsList: jspb.Message.toObjectList(msg.getHostSpecsList(),
    proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.toObject, includeInstance),
    networkId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    folderId: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment} */ (reader.readEnum());
      msg.setEnvironment(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.deserializeBinaryFromReader);
      msg.setConfigSpec(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec;
      reader.readMessage(value,proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.deserializeBinaryFromReader);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeletionProtection(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec.serializeBinaryToWriter
    );
  }
  f = message.getHostSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec.serializeBinaryToWriter
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
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDeletionProtection();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string backup_id = 1;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setBackupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional Cluster.Environment environment = 5;
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getEnvironment = function() {
  return /** @type {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.Cluster.Environment} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ConfigSpec config_spec = 6;
 * @return {?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getConfigSpec = function() {
  return /** @type{?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.mdb.elasticsearch.v1.ConfigSpec|undefined} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setConfigSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.clearConfigSpec = function() {
  return this.setConfigSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.hasConfigSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated HostSpec host_specs = 9;
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getHostSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec, 9));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setHostSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.addHostSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.HostSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.clearHostSpecsList = function() {
  return this.setHostSpecsList([]);
};


/**
 * optional string network_id = 10;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string security_group_ids = 11;
 * @return {!Array<string>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};


/**
 * optional string service_account_id = 12;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool deletion_protection = 13;
 * @return {boolean}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string folder_id = 14;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string backup_id = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.prototype.getBackupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata.prototype.setBackupId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata;
  return proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata.prototype.setClusterId = function(value) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    backupsList: jspb.Message.toObjectList(msg.getBackupsList(),
    yandex_cloud_mdb_elasticsearch_v1_backup_pb.Backup.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse;
  return proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_mdb_elasticsearch_v1_backup_pb.Backup;
      reader.readMessage(value,yandex_cloud_mdb_elasticsearch_v1_backup_pb.Backup.deserializeBinaryFromReader);
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
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_mdb_elasticsearch_v1_backup_pb.Backup.serializeBinaryToWriter
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
 * @return {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Backup>}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.getBackupsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Backup>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_mdb_elasticsearch_v1_backup_pb.Backup, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.mdb.elasticsearch.v1.Backup>} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse} returns this
*/
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.setBackupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.mdb.elasticsearch.v1.Backup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.Backup}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.addBackups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.mdb.elasticsearch.v1.Backup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.clearBackupsList = function() {
  return this.setBackupsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse} returns this
 */
proto.yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.yandex.cloud.mdb.elasticsearch.v1);
