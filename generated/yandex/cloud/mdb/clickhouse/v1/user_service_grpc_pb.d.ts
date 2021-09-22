// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_mdb_clickhouse_v1_user_service_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/user_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_user_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/user_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IUserServiceService_IGet;
    list: IUserServiceService_IList;
    create: IUserServiceService_ICreate;
    update: IUserServiceService_IUpdate;
    delete: IUserServiceService_IDelete;
    grantPermission: IUserServiceService_IGrantPermission;
    revokePermission: IUserServiceService_IRevokePermission;
}

interface IUserServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, yandex_cloud_mdb_clickhouse_v1_user_pb.User> {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_pb.User>;
}
interface IUserServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse> {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse>;
}
interface IUserServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IUserServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IUserServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IUserServiceService_IGrantPermission extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/GrantPermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IUserServiceService_IRevokePermission extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.UserService/RevokePermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, yandex_cloud_mdb_clickhouse_v1_user_pb.User>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, yandex_cloud_operation_operation_pb.Operation>;
    grantPermission: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, yandex_cloud_operation_operation_pb.Operation>;
    revokePermission: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IUserServiceClient {
    get(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    grantPermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    grantPermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    grantPermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    revokePermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    revokePermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    revokePermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_user_service_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public grantPermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public grantPermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public grantPermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.GrantUserPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public revokePermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public revokePermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public revokePermission(request: yandex_cloud_mdb_clickhouse_v1_user_service_pb.RevokeUserPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
