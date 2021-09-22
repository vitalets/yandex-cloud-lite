// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/database_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_ydb_v1_database_service_pb from "../../../../yandex/cloud/ydb/v1/database_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_ydb_v1_database_pb from "../../../../yandex/cloud/ydb/v1/database_pb";
import * as yandex_cloud_ydb_v1_backup_pb from "../../../../yandex/cloud/ydb/v1/backup_pb";

interface IDatabaseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDatabaseServiceService_IGet;
    list: IDatabaseServiceService_IList;
    create: IDatabaseServiceService_ICreate;
    update: IDatabaseServiceService_IUpdate;
    start: IDatabaseServiceService_IStart;
    stop: IDatabaseServiceService_IStop;
    delete: IDatabaseServiceService_IDelete;
    restore: IDatabaseServiceService_IRestore;
    backup: IDatabaseServiceService_IBackup;
}

interface IDatabaseServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, yandex_cloud_ydb_v1_database_pb.Database> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_pb.Database>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_pb.Database>;
}
interface IDatabaseServiceService_IList extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse>;
}
interface IDatabaseServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDatabaseServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDatabaseServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDatabaseServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDatabaseServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDatabaseServiceService_IRestore extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Restore";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDatabaseServiceService_IBackup extends grpc.MethodDefinition<yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ydb.v1.DatabaseService/Backup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const DatabaseServiceService: IDatabaseServiceService;

export interface IDatabaseServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, yandex_cloud_ydb_v1_database_pb.Database>;
    list: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
    stop: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
    restore: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, yandex_cloud_operation_operation_pb.Operation>;
    backup: grpc.handleUnaryCall<yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IDatabaseServiceClient {
    get(request: yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restore(request: yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restore(request: yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restore(request: yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    backup(request: yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    backup(request: yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    backup(request: yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class DatabaseServiceClient extends grpc.Client implements IDatabaseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_pb.Database) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restore(request: yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restore(request: yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restore(request: yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public backup(request: yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public backup(request: yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public backup(request: yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
