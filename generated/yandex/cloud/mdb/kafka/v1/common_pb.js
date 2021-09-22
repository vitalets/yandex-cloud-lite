// source: yandex/cloud/mdb/kafka/v1/common.proto
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

goog.exportSymbol('proto.yandex.cloud.mdb.kafka.v1.CompressionType', null, global);
/**
 * @enum {number}
 */
proto.yandex.cloud.mdb.kafka.v1.CompressionType = {
  COMPRESSION_TYPE_UNSPECIFIED: 0,
  COMPRESSION_TYPE_UNCOMPRESSED: 1,
  COMPRESSION_TYPE_ZSTD: 2,
  COMPRESSION_TYPE_LZ4: 3,
  COMPRESSION_TYPE_SNAPPY: 4,
  COMPRESSION_TYPE_GZIP: 5,
  COMPRESSION_TYPE_PRODUCER: 6
};

goog.object.extend(exports, proto.yandex.cloud.mdb.kafka.v1);
