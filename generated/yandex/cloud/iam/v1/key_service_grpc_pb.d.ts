// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iam_v1_key_service_pb from "../../../../yandex/cloud/iam/v1/key_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_iam_v1_key_pb from "../../../../yandex/cloud/iam/v1/key_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IKeyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IKeyServiceService_IGet;
    list: IKeyServiceService_IList;
    create: IKeyServiceService_ICreate;
    update: IKeyServiceService_IUpdate;
    delete: IKeyServiceService_IDelete;
    listOperations: IKeyServiceService_IListOperations;
}

interface IKeyServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, yandex_cloud_iam_v1_key_pb.Key> {
    path: "/yandex.cloud.iam.v1.KeyService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.GetKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.GetKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_key_pb.Key>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_pb.Key>;
}
interface IKeyServiceService_IList extends grpc.MethodDefinition<yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, yandex_cloud_iam_v1_key_service_pb.ListKeysResponse> {
    path: "/yandex.cloud.iam.v1.KeyService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.ListKeysRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.ListKeysRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.ListKeysResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.ListKeysResponse>;
}
interface IKeyServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse> {
    path: "/yandex.cloud.iam.v1.KeyService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse>;
}
interface IKeyServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.KeyService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IKeyServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.KeyService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IKeyServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse> {
    path: "/yandex.cloud.iam.v1.KeyService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse>;
}

export const KeyServiceService: IKeyServiceService;

export interface IKeyServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, yandex_cloud_iam_v1_key_pb.Key>;
    list: grpc.handleUnaryCall<yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, yandex_cloud_iam_v1_key_service_pb.ListKeysResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse>;
    update: grpc.handleUnaryCall<yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse>;
}

export interface IKeyServiceClient {
    get(request: yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_pb.Key) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_pb.Key) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_pb.Key) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class KeyServiceClient extends grpc.Client implements IKeyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_pb.Key) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_pb.Key) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_key_service_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_pb.Key) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_key_service_pb.ListKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse) => void): grpc.ClientUnaryCall;
}
