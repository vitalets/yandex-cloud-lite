// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/zone_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_zone_service_pb from "../../../../yandex/cloud/compute/v1/zone_service_pb";
import * as yandex_cloud_compute_v1_zone_pb from "../../../../yandex/cloud/compute/v1/zone_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IZoneServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IZoneServiceService_IGet;
    list: IZoneServiceService_IList;
}

interface IZoneServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, yandex_cloud_compute_v1_zone_pb.Zone> {
    path: "/yandex.cloud.compute.v1.ZoneService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_zone_pb.Zone>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_zone_pb.Zone>;
}
interface IZoneServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse> {
    path: "/yandex.cloud.compute.v1.ZoneService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse>;
}

export const ZoneServiceService: IZoneServiceService;

export interface IZoneServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, yandex_cloud_compute_v1_zone_pb.Zone>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse>;
}

export interface IZoneServiceClient {
    get(request: yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_pb.Zone) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_pb.Zone) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_pb.Zone) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse) => void): grpc.ClientUnaryCall;
}

export class ZoneServiceClient extends grpc.Client implements IZoneServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_pb.Zone) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_pb.Zone) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_pb.Zone) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse) => void): grpc.ClientUnaryCall;
}
