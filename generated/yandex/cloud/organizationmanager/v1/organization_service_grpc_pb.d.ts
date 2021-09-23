// package: yandex.cloud.organizationmanager.v1
// file: yandex/cloud/organizationmanager/v1/organization_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_organizationmanager_v1_organization_service_pb from "../../../../yandex/cloud/organizationmanager/v1/organization_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_organizationmanager_v1_organization_pb from "../../../../yandex/cloud/organizationmanager/v1/organization_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IOrganizationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IOrganizationServiceService_IGet;
    list: IOrganizationServiceService_IList;
    update: IOrganizationServiceService_IUpdate;
    listOperations: IOrganizationServiceService_IListOperations;
    listAccessBindings: IOrganizationServiceService_IListAccessBindings;
    setAccessBindings: IOrganizationServiceService_ISetAccessBindings;
    updateAccessBindings: IOrganizationServiceService_IUpdateAccessBindings;
}

interface IOrganizationServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, yandex_cloud_organizationmanager_v1_organization_pb.Organization> {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_organization_pb.Organization>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_organization_pb.Organization>;
}
interface IOrganizationServiceService_IList extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse> {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse>;
}
interface IOrganizationServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IOrganizationServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse> {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse>;
}
interface IOrganizationServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IOrganizationServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IOrganizationServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const OrganizationServiceService: IOrganizationServiceService;

export interface IOrganizationServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, yandex_cloud_organizationmanager_v1_organization_pb.Organization>;
    list: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse>;
    update: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IOrganizationServiceClient {
    get(request: yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_pb.Organization) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_pb.Organization) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_pb.Organization) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class OrganizationServiceClient extends grpc.Client implements IOrganizationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_pb.Organization) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_pb.Organization) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_pb.Organization) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse) => void): grpc.ClientUnaryCall;
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
