// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/billing_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_billing_v1_billing_account_service_pb from "../../../../yandex/cloud/billing/v1/billing_account_service_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_billing_v1_billing_account_pb from "../../../../yandex/cloud/billing/v1/billing_account_pb";
import * as yandex_cloud_billing_v1_billable_object_pb from "../../../../yandex/cloud/billing/v1/billable_object_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IBillingAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IBillingAccountServiceService_IGet;
    list: IBillingAccountServiceService_IList;
    listBillableObjectBindings: IBillingAccountServiceService_IListBillableObjectBindings;
    bindBillableObject: IBillingAccountServiceService_IBindBillableObject;
    listAccessBindings: IBillingAccountServiceService_IListAccessBindings;
    updateAccessBindings: IBillingAccountServiceService_IUpdateAccessBindings;
}

interface IBillingAccountServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, yandex_cloud_billing_v1_billing_account_pb.BillingAccount> {
    path: "/yandex.cloud.billing.v1.BillingAccountService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_billing_account_pb.BillingAccount>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_billing_account_pb.BillingAccount>;
}
interface IBillingAccountServiceService_IList extends grpc.MethodDefinition<yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse> {
    path: "/yandex.cloud.billing.v1.BillingAccountService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse>;
}
interface IBillingAccountServiceService_IListBillableObjectBindings extends grpc.MethodDefinition<yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse> {
    path: "/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse>;
}
interface IBillingAccountServiceService_IBindBillableObject extends grpc.MethodDefinition<yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IBillingAccountServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IBillingAccountServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const BillingAccountServiceService: IBillingAccountServiceService;

export interface IBillingAccountServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, yandex_cloud_billing_v1_billing_account_pb.BillingAccount>;
    list: grpc.handleUnaryCall<yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse>;
    listBillableObjectBindings: grpc.handleUnaryCall<yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse>;
    bindBillableObject: grpc.handleUnaryCall<yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, yandex_cloud_operation_operation_pb.Operation>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IBillingAccountServiceClient {
    get(request: yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_pb.BillingAccount) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_pb.BillingAccount) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_pb.BillingAccount) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse) => void): grpc.ClientUnaryCall;
    listBillableObjectBindings(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse) => void): grpc.ClientUnaryCall;
    listBillableObjectBindings(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse) => void): grpc.ClientUnaryCall;
    listBillableObjectBindings(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse) => void): grpc.ClientUnaryCall;
    bindBillableObject(request: yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    bindBillableObject(request: yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    bindBillableObject(request: yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class BillingAccountServiceClient extends grpc.Client implements IBillingAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_pb.BillingAccount) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_pb.BillingAccount) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_pb.BillingAccount) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse) => void): grpc.ClientUnaryCall;
    public listBillableObjectBindings(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse) => void): grpc.ClientUnaryCall;
    public listBillableObjectBindings(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse) => void): grpc.ClientUnaryCall;
    public listBillableObjectBindings(request: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse) => void): grpc.ClientUnaryCall;
    public bindBillableObject(request: yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public bindBillableObject(request: yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public bindBillableObject(request: yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
