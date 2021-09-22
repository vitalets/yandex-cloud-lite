// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/backup_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_mdb_clickhouse_v1_backup_service_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/backup_service_pb";
import * as yandex_cloud_mdb_clickhouse_v1_backup_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/backup_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IBackupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IBackupServiceService_IGet;
    list: IBackupServiceService_IList;
}

interface IBackupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup> {
    path: "/yandex.cloud.mdb.clickhouse.v1.BackupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup>;
}
interface IBackupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse> {
    path: "/yandex.cloud.mdb.clickhouse.v1.BackupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse>;
}

export const BackupServiceService: IBackupServiceService;

export interface IBackupServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse>;
}

export interface IBackupServiceClient {
    get(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
}

export class BackupServiceClient extends grpc.Client implements IBackupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
}
