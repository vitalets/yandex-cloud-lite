// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/customer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_billing_v1_customer_service_pb from "../../../../yandex/cloud/billing/v1/customer_service_pb";
import * as yandex_cloud_billing_v1_customer_pb from "../../../../yandex/cloud/billing/v1/customer_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: ICustomerServiceService_IList;
    invite: ICustomerServiceService_IInvite;
    activate: ICustomerServiceService_IActivate;
    suspend: ICustomerServiceService_ISuspend;
}

interface ICustomerServiceService_IList extends grpc.MethodDefinition<yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse> {
    path: "/yandex.cloud.billing.v1.CustomerService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse>;
}
interface ICustomerServiceService_IInvite extends grpc.MethodDefinition<yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.billing.v1.CustomerService/Invite";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICustomerServiceService_IActivate extends grpc.MethodDefinition<yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.billing.v1.CustomerService/Activate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICustomerServiceService_ISuspend extends grpc.MethodDefinition<yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.billing.v1.CustomerService/Suspend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse>;
    invite: grpc.handleUnaryCall<yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, yandex_cloud_operation_operation_pb.Operation>;
    activate: grpc.handleUnaryCall<yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, yandex_cloud_operation_operation_pb.Operation>;
    suspend: grpc.handleUnaryCall<yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ICustomerServiceClient {
    list(request: yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse) => void): grpc.ClientUnaryCall;
    invite(request: yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    invite(request: yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    invite(request: yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    suspend(request: yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    suspend(request: yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    suspend(request: yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse) => void): grpc.ClientUnaryCall;
    public invite(request: yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public invite(request: yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public invite(request: yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public suspend(request: yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public suspend(request: yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public suspend(request: yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
