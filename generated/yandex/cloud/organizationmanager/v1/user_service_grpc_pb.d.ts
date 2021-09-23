// package: yandex.cloud.organizationmanager.v1
// file: yandex/cloud/organizationmanager/v1/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_organizationmanager_v1_user_service_pb from "../../../../yandex/cloud/organizationmanager/v1/user_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_oauth_claims_pb from "../../../../yandex/cloud/oauth/claims_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listMembers: IUserServiceService_IListMembers;
    deleteMembership: IUserServiceService_IDeleteMembership;
}

interface IUserServiceService_IListMembers extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse> {
    path: "/yandex.cloud.organizationmanager.v1.UserService/ListMembers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse>;
}
interface IUserServiceService_IDeleteMembership extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    listMembers: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse>;
    deleteMembership: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IUserServiceClient {
    listMembers(request: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse) => void): grpc.ClientUnaryCall;
    listMembers(request: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse) => void): grpc.ClientUnaryCall;
    listMembers(request: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse) => void): grpc.ClientUnaryCall;
    deleteMembership(request: yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteMembership(request: yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteMembership(request: yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listMembers(request: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse) => void): grpc.ClientUnaryCall;
    public listMembers(request: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse) => void): grpc.ClientUnaryCall;
    public listMembers(request: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse) => void): grpc.ClientUnaryCall;
    public deleteMembership(request: yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteMembership(request: yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteMembership(request: yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
