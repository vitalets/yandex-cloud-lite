// package: yandex.cloud.organizationmanager.v1.saml
// file: yandex/cloud/organizationmanager/v1/saml/federation_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_organizationmanager_v1_saml_federation_service_pb from "../../../../../yandex/cloud/organizationmanager/v1/saml/federation_service_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_organizationmanager_v1_user_account_pb from "../../../../../yandex/cloud/organizationmanager/v1/user_account_pb";
import * as yandex_cloud_organizationmanager_v1_saml_federation_pb from "../../../../../yandex/cloud/organizationmanager/v1/saml/federation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IFederationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IFederationServiceService_IGet;
    list: IFederationServiceService_IList;
    create: IFederationServiceService_ICreate;
    update: IFederationServiceService_IUpdate;
    delete: IFederationServiceService_IDelete;
    addUserAccounts: IFederationServiceService_IAddUserAccounts;
    listUserAccounts: IFederationServiceService_IListUserAccounts;
    listOperations: IFederationServiceService_IListOperations;
}

interface IFederationServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation>;
}
interface IFederationServiceService_IList extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse>;
}
interface IFederationServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFederationServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFederationServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFederationServiceService_IAddUserAccounts extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFederationServiceService_IListUserAccounts extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse>;
}
interface IFederationServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse> {
    path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse>;
}

export const FederationServiceService: IFederationServiceService;

export interface IFederationServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation>;
    list: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, yandex_cloud_operation_operation_pb.Operation>;
    addUserAccounts: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, yandex_cloud_operation_operation_pb.Operation>;
    listUserAccounts: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse>;
}

export interface IFederationServiceClient {
    get(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse) => void): grpc.ClientUnaryCall;
    listUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse) => void): grpc.ClientUnaryCall;
    listUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class FederationServiceClient extends grpc.Client implements IFederationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse) => void): grpc.ClientUnaryCall;
    public listUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse) => void): grpc.ClientUnaryCall;
    public listUserAccounts(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse) => void): grpc.ClientUnaryCall;
}
