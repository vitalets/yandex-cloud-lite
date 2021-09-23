// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/yandex_passport_user_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_iam_v1_yandex_passport_user_account_service_pb from "../../../../yandex/cloud/iam/v1/yandex_passport_user_account_service_pb";
import * as yandex_cloud_iam_v1_user_account_pb from "../../../../yandex/cloud/iam/v1/user_account_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IYandexPassportUserAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getByLogin: IYandexPassportUserAccountServiceService_IGetByLogin;
}

interface IYandexPassportUserAccountServiceService_IGetByLogin extends grpc.MethodDefinition<yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, yandex_cloud_iam_v1_user_account_pb.UserAccount> {
    path: "/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_user_account_pb.UserAccount>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_user_account_pb.UserAccount>;
}

export const YandexPassportUserAccountServiceService: IYandexPassportUserAccountServiceService;

export interface IYandexPassportUserAccountServiceServer extends grpc.UntypedServiceImplementation {
    getByLogin: grpc.handleUnaryCall<yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, yandex_cloud_iam_v1_user_account_pb.UserAccount>;
}

export interface IYandexPassportUserAccountServiceClient {
    getByLogin(request: yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    getByLogin(request: yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    getByLogin(request: yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
}

export class YandexPassportUserAccountServiceClient extends grpc.Client implements IYandexPassportUserAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getByLogin(request: yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    public getByLogin(request: yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
    public getByLogin(request: yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_user_account_pb.UserAccount) => void): grpc.ClientUnaryCall;
}
