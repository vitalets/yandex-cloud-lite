// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/api_key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_iam_v1_api_key_service_pb from "../../../../yandex/cloud/iam/v1/api_key_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_iam_v1_api_key_pb from "../../../../yandex/cloud/iam/v1/api_key_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IApiKeyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IApiKeyServiceService_IList;
    get: IApiKeyServiceService_IGet;
    create: IApiKeyServiceService_ICreate;
    update: IApiKeyServiceService_IUpdate;
    delete: IApiKeyServiceService_IDelete;
    listOperations: IApiKeyServiceService_IListOperations;
}

interface IApiKeyServiceService_IList extends grpc.MethodDefinition<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse> {
    path: "/yandex.cloud.iam.v1.ApiKeyService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse>;
}
interface IApiKeyServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, yandex_cloud_iam_v1_api_key_pb.ApiKey> {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_pb.ApiKey>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_pb.ApiKey>;
}
interface IApiKeyServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse> {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse>;
}
interface IApiKeyServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiKeyServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiKeyServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse> {
    path: "/yandex.cloud.iam.v1.ApiKeyService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse>;
}

export const ApiKeyServiceService: IApiKeyServiceService;

export interface IApiKeyServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse>;
    get: grpc.handleUnaryCall<yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, yandex_cloud_iam_v1_api_key_pb.ApiKey>;
    create: grpc.handleUnaryCall<yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse>;
    update: grpc.handleUnaryCall<yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse>;
}

export interface IApiKeyServiceClient {
    list(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_pb.ApiKey) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_pb.ApiKey) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_pb.ApiKey) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class ApiKeyServiceClient extends grpc.Client implements IApiKeyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_pb.ApiKey) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_pb.ApiKey) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_pb.ApiKey) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse) => void): grpc.ClientUnaryCall;
}
