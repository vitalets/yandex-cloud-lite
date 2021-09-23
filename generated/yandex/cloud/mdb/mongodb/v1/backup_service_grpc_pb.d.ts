// package: yandex.cloud.mdb.mongodb.v1
// file: yandex/cloud/mdb/mongodb/v1/backup_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_mongodb_v1_backup_service_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/backup_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_mongodb_v1_backup_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/backup_pb";

interface IBackupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IBackupServiceService_IGet;
    list: IBackupServiceService_IList;
    delete: IBackupServiceService_IDelete;
}

interface IBackupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, yandex_cloud_mdb_mongodb_v1_backup_pb.Backup> {
    path: "/yandex.cloud.mdb.mongodb.v1.BackupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_mongodb_v1_backup_pb.Backup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_mongodb_v1_backup_pb.Backup>;
}
interface IBackupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse> {
    path: "/yandex.cloud.mdb.mongodb.v1.BackupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse>;
}
interface IBackupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.mongodb.v1.BackupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const BackupServiceService: IBackupServiceService;

export interface IBackupServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, yandex_cloud_mdb_mongodb_v1_backup_pb.Backup>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IBackupServiceClient {
    get(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class BackupServiceClient extends grpc.Client implements IBackupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_pb.Backup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
