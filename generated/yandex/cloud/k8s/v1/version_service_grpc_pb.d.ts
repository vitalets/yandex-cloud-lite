// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/version_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_k8s_v1_version_service_pb from "../../../../yandex/cloud/k8s/v1/version_service_pb";
import * as yandex_cloud_k8s_v1_cluster_pb from "../../../../yandex/cloud/k8s/v1/cluster_pb";

interface IVersionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IVersionServiceService_IList;
}

interface IVersionServiceService_IList extends grpc.MethodDefinition<yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse> {
    path: "/yandex.cloud.k8s.v1.VersionService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse>;
}

export const VersionServiceService: IVersionServiceService;

export interface IVersionServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse>;
}

export interface IVersionServiceClient {
    list(request: yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
}

export class VersionServiceClient extends grpc.Client implements IVersionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
}
