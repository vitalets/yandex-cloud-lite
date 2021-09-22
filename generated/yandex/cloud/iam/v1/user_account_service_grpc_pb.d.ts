// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/user_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iam_v1_user_account_service_pb from "../../../../yandex/cloud/iam/v1/user_account_service_pb";
import * as yandex_cloud_iam_v1_user_account_pb from "../../../../yandex/cloud/iam/v1/user_account_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IUserAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IUserAccountServiceService_IGet;
}

interface IUserAccountServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, yandex_cloud_iam_v1_user_account_pb.UserAccount> {
    path: "/yandex.cloud.iam.v1.UserAccountService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_user_account_pb.UserAccount>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_user_account_pb.UserAccount>;
}

export const UserAccountServiceService: IUserAccountServiceService;

export interface IUserAccountServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, yandex_cloud_iam_v1_user_account_pb.UserAccount>;
}

export interface IUserAccountServiceClient {
    get(request: yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
}

export class UserAccountServiceClient extends grpc.Client implements IUserAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
}
