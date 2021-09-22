// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_clickhouse_v1_ml_model_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model_pb.js');

function serialize_yandex_cloud_mdb_clickhouse_v1_CreateMlModelRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_CreateMlModelRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteMlModelRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteMlModelRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_GetMlModelRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_GetMlModelRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_MlModel(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.MlModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_MlModel(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_UpdateMlModelRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateMlModelRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing machine learning models.
var MlModelServiceService = exports.MlModelServiceService = {
  // Returns the specified machine learning model.
//
// To get the list of all available models, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_GetMlModelRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_GetMlModelRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_MlModel,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_MlModel,
  },
  // Retrieves the list of machine learning models in the specified cluster.
list: {
    path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListMlModelsResponse,
  },
  // Creates a machine learning model in the specified cluster.
create: {
    path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_CreateMlModelRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_CreateMlModelRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified machine learning model.
update: {
    path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_UpdateMlModelRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateMlModelRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified machine learning model.
delete: {
    path: '/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteMlModelRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteMlModelRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.MlModelServiceClient = grpc.makeGenericClientConstructor(MlModelServiceService);
