// package: yandex.cloud.kms.v1
// file: yandex/cloud/kms/v1/symmetric_key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_kms_v1_symmetric_key_service_pb from "../../../../yandex/cloud/kms/v1/symmetric_key_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_kms_v1_symmetric_key_pb from "../../../../yandex/cloud/kms/v1/symmetric_key_pb";

interface ISymmetricKeyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISymmetricKeyServiceService_ICreate;
    get: ISymmetricKeyServiceService_IGet;
    list: ISymmetricKeyServiceService_IList;
    listVersions: ISymmetricKeyServiceService_IListVersions;
    update: ISymmetricKeyServiceService_IUpdate;
    delete: ISymmetricKeyServiceService_IDelete;
    setPrimaryVersion: ISymmetricKeyServiceService_ISetPrimaryVersion;
    scheduleVersionDestruction: ISymmetricKeyServiceService_IScheduleVersionDestruction;
    cancelVersionDestruction: ISymmetricKeyServiceService_ICancelVersionDestruction;
    rotate: ISymmetricKeyServiceService_IRotate;
    listOperations: ISymmetricKeyServiceService_IListOperations;
    listAccessBindings: ISymmetricKeyServiceService_IListAccessBindings;
    setAccessBindings: ISymmetricKeyServiceService_ISetAccessBindings;
    updateAccessBindings: ISymmetricKeyServiceService_IUpdateAccessBindings;
}

interface ISymmetricKeyServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey>;
}
interface ISymmetricKeyServiceService_IList extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse>;
}
interface ISymmetricKeyServiceService_IListVersions extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse>;
}
interface ISymmetricKeyServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_ISetPrimaryVersion extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_IScheduleVersionDestruction extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_ICancelVersionDestruction extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_IRotate extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Rotate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse>;
}
interface ISymmetricKeyServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface ISymmetricKeyServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISymmetricKeyServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const SymmetricKeyServiceService: ISymmetricKeyServiceService;

export interface ISymmetricKeyServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    get: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey>;
    list: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse>;
    listVersions: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse>;
    update: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    setPrimaryVersion: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, yandex_cloud_operation_operation_pb.Operation>;
    scheduleVersionDestruction: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation>;
    cancelVersionDestruction: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation>;
    rotate: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ISymmetricKeyServiceClient {
    create(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setPrimaryVersion(request: yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setPrimaryVersion(request: yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setPrimaryVersion(request: yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scheduleVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scheduleVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scheduleVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancelVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancelVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancelVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rotate(request: yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rotate(request: yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rotate(request: yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class SymmetricKeyServiceClient extends grpc.Client implements ISymmetricKeyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setPrimaryVersion(request: yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setPrimaryVersion(request: yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setPrimaryVersion(request: yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scheduleVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scheduleVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scheduleVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancelVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancelVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancelVersionDestruction(request: yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rotate(request: yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rotate(request: yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rotate(request: yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse) => void): grpc.ClientUnaryCall;
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
