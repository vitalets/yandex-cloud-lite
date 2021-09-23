// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/versions_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_clickhouse_v1_versions_service_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/versions_service_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_version_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/version_pb";

interface IVersionsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IVersionsServiceService_IList;
}

interface IVersionsServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse> {
    path: "/yandex.cloud.mdb.clickhouse.v1.VersionsService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse>;
}

export const VersionsServiceService: IVersionsServiceService;

export interface IVersionsServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse>;
}

export interface IVersionsServiceClient {
    list(request: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
}

export class VersionsServiceClient extends grpc.Client implements IVersionsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
}
