// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_kafka_v1_connector_service_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/connector_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_kafka_v1_connector_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/connector_pb.js');

function serialize_yandex_cloud_mdb_kafka_v1_Connector(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_pb.Connector)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.Connector');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_Connector(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_pb.Connector.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_CreateConnectorRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.CreateConnectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_CreateConnectorRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_DeleteConnectorRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_DeleteConnectorRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_GetConnectorRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.GetConnectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_GetConnectorRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListConnectorsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListConnectorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListConnectorsRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListConnectorsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListConnectorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListConnectorsResponse(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_PauseConnectorRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.PauseConnectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_PauseConnectorRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ResumeConnectorRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ResumeConnectorRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Apache Kafka Connectors resources.
var ConnectorServiceService = exports.ConnectorServiceService = {
  // Returns the specified Apache Kafka Connector resource.
//
// To get the list of available Apache Kafka Connector resources, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest,
    responseType: yandex_cloud_mdb_kafka_v1_connector_pb.Connector,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_GetConnectorRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_GetConnectorRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_Connector,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_Connector,
  },
  // Retrieves the list of Apache Kafka Connector resources in the specified cluster.
list: {
    path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest,
    responseType: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListConnectorsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListConnectorsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListConnectorsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListConnectorsResponse,
  },
  // Creates a new Apache Kafka connector in the specified cluster.
create: {
    path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_CreateConnectorRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_CreateConnectorRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified Apache Kafka connector.
delete: {
    path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_DeleteConnectorRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_DeleteConnectorRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Resume the specified Apache Kafka connector.
resume: {
    path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_ResumeConnectorRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ResumeConnectorRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Pause the specified Apache Kafka connector.
pause: {
    path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_PauseConnectorRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_PauseConnectorRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.ConnectorServiceClient = grpc.makeGenericClientConstructor(ConnectorServiceService);
