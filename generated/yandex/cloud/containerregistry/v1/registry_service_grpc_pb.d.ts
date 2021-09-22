// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/registry_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_containerregistry_v1_registry_service_pb from "../../../../yandex/cloud/containerregistry/v1/registry_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_containerregistry_v1_registry_pb from "../../../../yandex/cloud/containerregistry/v1/registry_pb";
import * as yandex_cloud_containerregistry_v1_ip_permission_pb from "../../../../yandex/cloud/containerregistry/v1/ip_permission_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

interface IRegistryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IRegistryServiceService_IGet;
    list: IRegistryServiceService_IList;
    create: IRegistryServiceService_ICreate;
    update: IRegistryServiceService_IUpdate;
    delete: IRegistryServiceService_IDelete;
    listAccessBindings: IRegistryServiceService_IListAccessBindings;
    setAccessBindings: IRegistryServiceService_ISetAccessBindings;
    updateAccessBindings: IRegistryServiceService_IUpdateAccessBindings;
    listIpPermission: IRegistryServiceService_IListIpPermission;
    setIpPermission: IRegistryServiceService_ISetIpPermission;
    updateIpPermission: IRegistryServiceService_IUpdateIpPermission;
}

interface IRegistryServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, yandex_cloud_containerregistry_v1_registry_pb.Registry> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_pb.Registry>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_pb.Registry>;
}
interface IRegistryServiceService_IList extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse>;
}
interface IRegistryServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IRegistryServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IListIpPermission extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse>;
}
interface IRegistryServiceService_ISetIpPermission extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IUpdateIpPermission extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const RegistryServiceService: IRegistryServiceService;

export interface IRegistryServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, yandex_cloud_containerregistry_v1_registry_pb.Registry>;
    list: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, yandex_cloud_operation_operation_pb.Operation>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    listIpPermission: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse>;
    setIpPermission: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateIpPermission: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IRegistryServiceClient {
    get(request: yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse) => void): grpc.ClientUnaryCall;
    listIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse) => void): grpc.ClientUnaryCall;
    listIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse) => void): grpc.ClientUnaryCall;
    setIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class RegistryServiceClient extends grpc.Client implements IRegistryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse) => void): grpc.ClientUnaryCall;
    public listIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse) => void): grpc.ClientUnaryCall;
    public listIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse) => void): grpc.ClientUnaryCall;
    public setIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateIpPermission(request: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
