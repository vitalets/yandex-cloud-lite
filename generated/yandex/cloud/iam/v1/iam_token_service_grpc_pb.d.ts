// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/iam_token_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iam_v1_iam_token_service_pb from "../../../../yandex/cloud/iam/v1/iam_token_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IIamTokenServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IIamTokenServiceService_ICreate;
    createForServiceAccount: IIamTokenServiceService_ICreateForServiceAccount;
}

interface IIamTokenServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse> {
    path: "/yandex.cloud.iam.v1.IamTokenService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse>;
}
interface IIamTokenServiceService_ICreateForServiceAccount extends grpc.MethodDefinition<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse> {
    path: "/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse>;
}

export const IamTokenServiceService: IIamTokenServiceService;

export interface IIamTokenServiceServer {
    create: grpc.handleUnaryCall<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse>;
    createForServiceAccount: grpc.handleUnaryCall<yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse>;
}

export interface IIamTokenServiceClient {
    create(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    createForServiceAccount(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    createForServiceAccount(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    createForServiceAccount(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
}

export class IamTokenServiceClient extends grpc.Client implements IIamTokenServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    public createForServiceAccount(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    public createForServiceAccount(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
    public createForServiceAccount(request: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse) => void): grpc.ClientUnaryCall;
}
