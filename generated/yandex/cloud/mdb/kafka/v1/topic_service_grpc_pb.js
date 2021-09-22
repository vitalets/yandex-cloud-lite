// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_kafka_v1_topic_service_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/topic_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_kafka_v1_topic_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/topic_pb.js');

function serialize_yandex_cloud_mdb_kafka_v1_CreateTopicRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.CreateTopicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_CreateTopicRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_DeleteTopicRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.DeleteTopicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_DeleteTopicRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_GetTopicRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.GetTopicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_GetTopicRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListTopicsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListTopicsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListTopicsRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListTopicsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListTopicsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListTopicsResponse(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_Topic(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_topic_pb.Topic)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.Topic');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_Topic(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_topic_pb.Topic.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_UpdateTopicRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.UpdateTopicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_UpdateTopicRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Kafka topics.
var TopicServiceService = exports.TopicServiceService = {
  // Returns the specified Kafka topic.
//
// To get the list of available Kafka topics, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.kafka.v1.TopicService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest,
    responseType: yandex_cloud_mdb_kafka_v1_topic_pb.Topic,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_GetTopicRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_GetTopicRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_Topic,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_Topic,
  },
  // Retrieves the list of Kafka topics in the specified cluster.
list: {
    path: '/yandex.cloud.mdb.kafka.v1.TopicService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest,
    responseType: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListTopicsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListTopicsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListTopicsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListTopicsResponse,
  },
  // Creates a new Kafka topic in the specified cluster.
create: {
    path: '/yandex.cloud.mdb.kafka.v1.TopicService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_CreateTopicRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_CreateTopicRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified Kafka topic.
update: {
    path: '/yandex.cloud.mdb.kafka.v1.TopicService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_UpdateTopicRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_UpdateTopicRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified Kafka topic.
delete: {
    path: '/yandex.cloud.mdb.kafka.v1.TopicService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_DeleteTopicRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_DeleteTopicRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.TopicServiceClient = grpc.makeGenericClientConstructor(TopicServiceService);
