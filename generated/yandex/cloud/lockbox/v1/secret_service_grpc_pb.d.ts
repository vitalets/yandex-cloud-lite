// package: yandex.cloud.lockbox.v1
// file: yandex/cloud/lockbox/v1/secret_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_lockbox_v1_secret_service_pb from "../../../../yandex/cloud/lockbox/v1/secret_service_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_lockbox_v1_secret_pb from "../../../../yandex/cloud/lockbox/v1/secret_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ISecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ISecretServiceService_IGet;
    list: ISecretServiceService_IList;
    create: ISecretServiceService_ICreate;
    update: ISecretServiceService_IUpdate;
    delete: ISecretServiceService_IDelete;
    activate: ISecretServiceService_IActivate;
    deactivate: ISecretServiceService_IDeactivate;
    listVersions: ISecretServiceService_IListVersions;
    addVersion: ISecretServiceService_IAddVersion;
    scheduleVersionDestruction: ISecretServiceService_IScheduleVersionDestruction;
    cancelVersionDestruction: ISecretServiceService_ICancelVersionDestruction;
    listOperations: ISecretServiceService_IListOperations;
    listAccessBindings: ISecretServiceService_IListAccessBindings;
    setAccessBindings: ISecretServiceService_ISetAccessBindings;
    updateAccessBindings: ISecretServiceService_IUpdateAccessBindings;
}

interface ISecretServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, yandex_cloud_lockbox_v1_secret_pb.Secret> {
    path: "/yandex.cloud.lockbox.v1.SecretService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_pb.Secret>;
    responseDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_pb.Secret>;
}
interface ISecretServiceService_IList extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse> {
    path: "/yandex.cloud.lockbox.v1.SecretService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse>;
}
interface ISecretServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IActivate extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/Activate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IDeactivate extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/Deactivate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IListVersions extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse> {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse>;
}
interface ISecretServiceService_IAddVersion extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/AddVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IScheduleVersionDestruction extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_ICancelVersionDestruction extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse> {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse>;
}
interface ISecretServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface ISecretServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecretServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const SecretServiceService: ISecretServiceService;

export interface ISecretServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, yandex_cloud_lockbox_v1_secret_pb.Secret>;
    list: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, yandex_cloud_operation_operation_pb.Operation>;
    activate: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, yandex_cloud_operation_operation_pb.Operation>;
    deactivate: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, yandex_cloud_operation_operation_pb.Operation>;
    listVersions: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse>;
    addVersion: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, yandex_cloud_operation_operation_pb.Operation>;
    scheduleVersionDestruction: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation>;
    cancelVersionDestruction: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ISecretServiceClient {
    get(request: yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_pb.Secret) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_pb.Secret) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_pb.Secret) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    addVersion(request: yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addVersion(request: yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addVersion(request: yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scheduleVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scheduleVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scheduleVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancelVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancelVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancelVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class SecretServiceClient extends grpc.Client implements ISecretServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_pb.Secret) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_pb.Secret) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_pb.Secret) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public addVersion(request: yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addVersion(request: yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addVersion(request: yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scheduleVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scheduleVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scheduleVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancelVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancelVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancelVersionDestruction(request: yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse) => void): grpc.ClientUnaryCall;
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
