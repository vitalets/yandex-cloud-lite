// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/format_schema_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_format_schema_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema_pb";

interface IFormatSchemaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IFormatSchemaServiceService_IGet;
    list: IFormatSchemaServiceService_IList;
    create: IFormatSchemaServiceService_ICreate;
    update: IFormatSchemaServiceService_IUpdate;
    delete: IFormatSchemaServiceService_IDelete;
}

interface IFormatSchemaServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema> {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema>;
}
interface IFormatSchemaServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse> {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse>;
}
interface IFormatSchemaServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFormatSchemaServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFormatSchemaServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const FormatSchemaServiceService: IFormatSchemaServiceService;

export interface IFormatSchemaServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IFormatSchemaServiceClient {
    get(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class FormatSchemaServiceClient extends grpc.Client implements IFormatSchemaServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.GetFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.ListFormatSchemasResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.CreateFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.UpdateFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_format_schema_service_pb.DeleteFormatSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
