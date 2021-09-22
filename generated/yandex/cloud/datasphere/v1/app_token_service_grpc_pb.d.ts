// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/app_token_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_datasphere_v1_app_token_service_pb from "../../../../yandex/cloud/datasphere/v1/app_token_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IAppTokenServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validate: IAppTokenServiceService_IValidate;
}

interface IAppTokenServiceService_IValidate extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, google_protobuf_empty_pb.Empty> {
    path: "/yandex.cloud.datasphere.v1.AppTokenService/Validate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const AppTokenServiceService: IAppTokenServiceService;

export interface IAppTokenServiceServer {
    validate: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, google_protobuf_empty_pb.Empty>;
}

export interface IAppTokenServiceClient {
    validate(request: yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    validate(request: yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    validate(request: yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class AppTokenServiceClient extends grpc.Client implements IAppTokenServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public validate(request: yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public validate(request: yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public validate(request: yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
