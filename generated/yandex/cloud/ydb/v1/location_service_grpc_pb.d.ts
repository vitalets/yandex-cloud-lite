// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/location_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_ydb_v1_location_service_pb from "../../../../yandex/cloud/ydb/v1/location_service_pb";
import * as yandex_cloud_ydb_v1_location_pb from "../../../../yandex/cloud/ydb/v1/location_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ILocationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ILocationServiceService_IGet;
    list: ILocationServiceService_IList;
}

interface ILocationServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, yandex_cloud_ydb_v1_location_pb.Location> {
    path: "/yandex.cloud.ydb.v1.LocationService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ydb_v1_location_pb.Location>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_location_pb.Location>;
}
interface ILocationServiceService_IList extends grpc.MethodDefinition<yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse> {
    path: "/yandex.cloud.ydb.v1.LocationService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse>;
}

export const LocationServiceService: ILocationServiceService;

export interface ILocationServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, yandex_cloud_ydb_v1_location_pb.Location>;
    list: grpc.handleUnaryCall<yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse>;
}

export interface ILocationServiceClient {
    get(request: yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_pb.Location) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_pb.Location) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_pb.Location) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse) => void): grpc.ClientUnaryCall;
}

export class LocationServiceClient extends grpc.Client implements ILocationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_pb.Location) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_pb.Location) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_pb.Location) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse) => void): grpc.ClientUnaryCall;
}
