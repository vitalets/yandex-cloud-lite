// package: yandex.cloud.resourcemanager.v1
// file: yandex/cloud/resourcemanager/v1/cloud_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_resourcemanager_v1_cloud_service_pb from "../../../../yandex/cloud/resourcemanager/v1/cloud_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_resourcemanager_v1_cloud_pb from "../../../../yandex/cloud/resourcemanager/v1/cloud_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ICloudServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ICloudServiceService_IGet;
    list: ICloudServiceService_IList;
    update: ICloudServiceService_IUpdate;
    delete: ICloudServiceService_IDelete;
    listOperations: ICloudServiceService_IListOperations;
    listAccessBindings: ICloudServiceService_IListAccessBindings;
    setAccessBindings: ICloudServiceService_ISetAccessBindings;
    updateAccessBindings: ICloudServiceService_IUpdateAccessBindings;
}

interface ICloudServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, yandex_cloud_resourcemanager_v1_cloud_pb.Cloud> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_pb.Cloud>;
    responseDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_pb.Cloud>;
}
interface ICloudServiceService_IList extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse>;
}
interface ICloudServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICloudServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICloudServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse>;
}
interface ICloudServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface ICloudServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICloudServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const CloudServiceService: ICloudServiceService;

export interface ICloudServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, yandex_cloud_resourcemanager_v1_cloud_pb.Cloud>;
    list: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse>;
    update: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ICloudServiceClient {
    get(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class CloudServiceClient extends grpc.Client implements ICloudServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
