// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_clickhouse_v1_format_schema_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema_pb.js');

function serialize_yandex_cloud_mdb_clickhouse_v1_CreateFormatSchemaRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_CreateFormatSchemaRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteFormatSchemaRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteFormatSchemaRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_FormatSchema(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.FormatSchema');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_FormatSchema(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_GetFormatSchemaRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_GetFormatSchemaRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_UpdateFormatSchemaRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateFormatSchemaRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


var FormatSchemaServiceService = exports.FormatSchemaServiceService = {
  get: {
    path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_GetFormatSchemaRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_GetFormatSchemaRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_FormatSchema,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_FormatSchema,
  },
  list: {
    path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListFormatSchemasResponse,
  },
  create: {
    path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_CreateFormatSchemaRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_CreateFormatSchemaRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  update: {
    path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_UpdateFormatSchemaRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateFormatSchemaRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  delete: {
    path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteFormatSchemaRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteFormatSchemaRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.FormatSchemaServiceClient = grpc.makeGenericClientConstructor(FormatSchemaServiceService);
