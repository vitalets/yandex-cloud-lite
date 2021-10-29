// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/budget_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_billing_v1_budget_service_pb from "../../../../yandex/cloud/billing/v1/budget_service_pb";
import * as yandex_cloud_billing_v1_budget_pb from "../../../../yandex/cloud/billing/v1/budget_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IBudgetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IBudgetServiceService_IGet;
    list: IBudgetServiceService_IList;
    create: IBudgetServiceService_ICreate;
}

interface IBudgetServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, yandex_cloud_billing_v1_budget_pb.Budget> {
    path: "/yandex.cloud.billing.v1.BudgetService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_budget_pb.Budget>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_budget_pb.Budget>;
}
interface IBudgetServiceService_IList extends grpc.MethodDefinition<yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse> {
    path: "/yandex.cloud.billing.v1.BudgetService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse>;
}
interface IBudgetServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.billing.v1.BudgetService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const BudgetServiceService: IBudgetServiceService;

export interface IBudgetServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, yandex_cloud_billing_v1_budget_pb.Budget>;
    list: grpc.handleUnaryCall<yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IBudgetServiceClient {
    get(request: yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_pb.Budget) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_pb.Budget) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_pb.Budget) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class BudgetServiceClient extends grpc.Client implements IBudgetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_pb.Budget) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_pb.Budget) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_pb.Budget) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
