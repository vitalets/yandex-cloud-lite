// package: yandex.cloud.mdb.mysql.v1
// file: yandex/cloud/mdb/mysql/v1/database_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_mysql_v1_database_service_pb from "../../../../../yandex/cloud/mdb/mysql/v1/database_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_mysql_v1_database_pb from "../../../../../yandex/cloud/mdb/mysql/v1/database_pb";

interface IDatabaseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDatabaseServiceService_IGet;
    list: IDatabaseServiceService_IList;
    create: IDatabaseServiceService_ICreate;
    delete: IDatabaseServiceService_IDelete;
}

interface IDatabaseServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, yandex_cloud_mdb_mysql_v1_database_pb.Database> {
    path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_mysql_v1_database_pb.Database>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_mysql_v1_database_pb.Database>;
}
interface IDatabaseServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse> {
    path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse>;
}
interface IDatabaseServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDatabaseServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const DatabaseServiceService: IDatabaseServiceService;

export interface IDatabaseServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, yandex_cloud_mdb_mysql_v1_database_pb.Database>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IDatabaseServiceClient {
    get(request: yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class DatabaseServiceClient extends grpc.Client implements IDatabaseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_mysql_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mysql_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_mysql_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_mysql_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
