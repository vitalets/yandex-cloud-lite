// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/virtual_host_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_apploadbalancer_v1_virtual_host_service_pb from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_virtual_host_pb from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IVirtualHostServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IVirtualHostServiceService_IGet;
    list: IVirtualHostServiceService_IList;
    create: IVirtualHostServiceService_ICreate;
    update: IVirtualHostServiceService_IUpdate;
    delete: IVirtualHostServiceService_IDelete;
    removeRoute: IVirtualHostServiceService_IRemoveRoute;
    updateRoute: IVirtualHostServiceService_IUpdateRoute;
}

interface IVirtualHostServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost> {
    path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>;
}
interface IVirtualHostServiceService_IList extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse>;
}
interface IVirtualHostServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IVirtualHostServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IVirtualHostServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IVirtualHostServiceService_IRemoveRoute extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IVirtualHostServiceService_IUpdateRoute extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const VirtualHostServiceService: IVirtualHostServiceService;

export interface IVirtualHostServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>;
    list: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeRoute: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateRoute: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IVirtualHostServiceClient {
    get(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class VirtualHostServiceClient extends grpc.Client implements IVirtualHostServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRoute(request: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
