// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/connector_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_kafka_v1_connector_service_pb from "../../../../../yandex/cloud/mdb/kafka/v1/connector_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_kafka_v1_connector_pb from "../../../../../yandex/cloud/mdb/kafka/v1/connector_pb";

interface IConnectorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IConnectorServiceService_IGet;
    list: IConnectorServiceService_IList;
    create: IConnectorServiceService_ICreate;
    delete: IConnectorServiceService_IDelete;
    resume: IConnectorServiceService_IResume;
    pause: IConnectorServiceService_IPause;
}

interface IConnectorServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, yandex_cloud_mdb_kafka_v1_connector_pb.Connector> {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_pb.Connector>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_pb.Connector>;
}
interface IConnectorServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse> {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse>;
}
interface IConnectorServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IConnectorServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IConnectorServiceService_IResume extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IConnectorServiceService_IPause extends grpc.MethodDefinition<yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const ConnectorServiceService: IConnectorServiceService;

export interface IConnectorServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, yandex_cloud_mdb_kafka_v1_connector_pb.Connector>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, yandex_cloud_operation_operation_pb.Operation>;
    resume: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, yandex_cloud_operation_operation_pb.Operation>;
    pause: grpc.handleUnaryCall<yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IConnectorServiceClient {
    get(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_pb.Connector) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_pb.Connector) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_pb.Connector) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resume(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resume(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resume(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pause(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pause(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pause(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class ConnectorServiceClient extends grpc.Client implements IConnectorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_pb.Connector) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_pb.Connector) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.GetConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_pb.Connector) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_kafka_v1_connector_service_pb.ListConnectorsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.CreateConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.DeleteConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resume(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resume(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resume(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.ResumeConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pause(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pause(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pause(request: yandex_cloud_mdb_kafka_v1_connector_service_pb.PauseConnectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
