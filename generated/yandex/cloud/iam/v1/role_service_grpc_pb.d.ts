// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/role_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iam_v1_role_service_pb from "../../../../yandex/cloud/iam/v1/role_service_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_iam_v1_role_pb from "../../../../yandex/cloud/iam/v1/role_pb";

interface IRoleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IRoleServiceService_IGet;
    list: IRoleServiceService_IList;
}

interface IRoleServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, yandex_cloud_iam_v1_role_pb.Role> {
    path: "/yandex.cloud.iam.v1.RoleService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_role_service_pb.GetRoleRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_role_service_pb.GetRoleRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_role_pb.Role>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_role_pb.Role>;
}
interface IRoleServiceService_IList extends grpc.MethodDefinition<yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, yandex_cloud_iam_v1_role_service_pb.ListRolesResponse> {
    path: "/yandex.cloud.iam.v1.RoleService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_role_service_pb.ListRolesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_role_service_pb.ListRolesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_role_service_pb.ListRolesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_role_service_pb.ListRolesResponse>;
}

export const RoleServiceService: IRoleServiceService;

export interface IRoleServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, yandex_cloud_iam_v1_role_pb.Role>;
    list: grpc.handleUnaryCall<yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, yandex_cloud_iam_v1_role_service_pb.ListRolesResponse>;
}

export interface IRoleServiceClient {
    get(request: yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_pb.Role) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_pb.Role) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_pb.Role) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_service_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_service_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_service_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
}

export class RoleServiceClient extends grpc.Client implements IRoleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_pb.Role) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_pb.Role) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_role_service_pb.GetRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_pb.Role) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_service_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_service_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_role_service_pb.ListRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_role_service_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
}
