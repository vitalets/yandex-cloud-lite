// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/topic_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_kafka_v1_topic_service_pb from "../../../../../yandex/cloud/mdb/kafka/v1/topic_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_kafka_v1_topic_pb from "../../../../../yandex/cloud/mdb/kafka/v1/topic_pb";

interface ITopicServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ITopicServiceService_IGet;
    list: ITopicServiceService_IList;
    create: ITopicServiceService_ICreate;
    update: ITopicServiceService_IUpdate;
    delete: ITopicServiceService_IDelete;
}

interface ITopicServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, yandex_cloud_mdb_kafka_v1_topic_pb.Topic> {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_topic_pb.Topic>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_topic_pb.Topic>;
}
interface ITopicServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse> {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse>;
}
interface ITopicServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITopicServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITopicServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.kafka.v1.TopicService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const TopicServiceService: ITopicServiceService;

export interface ITopicServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, yandex_cloud_mdb_kafka_v1_topic_pb.Topic>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ITopicServiceClient {
    get(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_pb.Topic) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_pb.Topic) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_pb.Topic) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class TopicServiceClient extends grpc.Client implements ITopicServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_pb.Topic) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_pb.Topic) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.GetTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_pb.Topic) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_topic_service_pb.ListTopicsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.CreateTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.UpdateTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_kafka_v1_topic_service_pb.DeleteTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
