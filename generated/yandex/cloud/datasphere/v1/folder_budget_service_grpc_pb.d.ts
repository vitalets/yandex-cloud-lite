// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/folder_budget_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_datasphere_v1_folder_budget_service_pb from "../../../../yandex/cloud/datasphere/v1/folder_budget_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IFolderBudgetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IFolderBudgetServiceService_IGet;
    set: IFolderBudgetServiceService_ISet;
}

interface IFolderBudgetServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse> {
    path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse>;
}
interface IFolderBudgetServiceService_ISet extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, google_protobuf_empty_pb.Empty> {
    path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Set";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const FolderBudgetServiceService: IFolderBudgetServiceService;

export interface IFolderBudgetServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse>;
    set: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, google_protobuf_empty_pb.Empty>;
}

export interface IFolderBudgetServiceClient {
    get(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse) => void): grpc.ClientUnaryCall;
    set(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    set(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    set(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class FolderBudgetServiceClient extends grpc.Client implements IFolderBudgetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse) => void): grpc.ClientUnaryCall;
    public set(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public set(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public set(request: yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
