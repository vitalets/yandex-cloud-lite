// package: yandex.cloud.iam.v1.awscompatibility
// file: yandex/cloud/iam/v1/awscompatibility/access_key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iam_v1_awscompatibility_access_key_service_pb from "../../../../../yandex/cloud/iam/v1/awscompatibility/access_key_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_iam_v1_awscompatibility_access_key_pb from "../../../../../yandex/cloud/iam/v1/awscompatibility/access_key_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IAccessKeyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IAccessKeyServiceService_IList;
    get: IAccessKeyServiceService_IGet;
    create: IAccessKeyServiceService_ICreate;
    update: IAccessKeyServiceService_IUpdate;
    delete: IAccessKeyServiceService_IDelete;
    listOperations: IAccessKeyServiceService_IListOperations;
}

interface IAccessKeyServiceService_IList extends grpc.MethodDefinition<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse> {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse>;
}
interface IAccessKeyServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey> {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey>;
}
interface IAccessKeyServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse> {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse>;
}
interface IAccessKeyServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAccessKeyServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAccessKeyServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse> {
    path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse>;
}

export const AccessKeyServiceService: IAccessKeyServiceService;

export interface IAccessKeyServiceServer {
    list: grpc.handleUnaryCall<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse>;
    get: grpc.handleUnaryCall<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey>;
    create: grpc.handleUnaryCall<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse>;
    update: grpc.handleUnaryCall<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse>;
}

export interface IAccessKeyServiceClient {
    list(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class AccessKeyServiceClient extends grpc.Client implements IAccessKeyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public list(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse) => void): grpc.ClientUnaryCall;
}
