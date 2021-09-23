// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/snapshot_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_compute_v1_snapshot_service_pb from "../../../../yandex/cloud/compute/v1/snapshot_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_snapshot_pb from "../../../../yandex/cloud/compute/v1/snapshot_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ISnapshotServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ISnapshotServiceService_IGet;
    list: ISnapshotServiceService_IList;
    create: ISnapshotServiceService_ICreate;
    update: ISnapshotServiceService_IUpdate;
    delete: ISnapshotServiceService_IDelete;
    listOperations: ISnapshotServiceService_IListOperations;
}

interface ISnapshotServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, yandex_cloud_compute_v1_snapshot_pb.Snapshot> {
    path: "/yandex.cloud.compute.v1.SnapshotService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_pb.Snapshot>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_pb.Snapshot>;
}
interface ISnapshotServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse> {
    path: "/yandex.cloud.compute.v1.SnapshotService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse>;
}
interface ISnapshotServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.SnapshotService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISnapshotServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.SnapshotService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISnapshotServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.SnapshotService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISnapshotServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse> {
    path: "/yandex.cloud.compute.v1.SnapshotService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse>;
}

export const SnapshotServiceService: ISnapshotServiceService;

export interface ISnapshotServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, yandex_cloud_compute_v1_snapshot_pb.Snapshot>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse>;
}

export interface ISnapshotServiceClient {
    get(request: yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_pb.Snapshot) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_pb.Snapshot) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_pb.Snapshot) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class SnapshotServiceClient extends grpc.Client implements ISnapshotServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_pb.Snapshot) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_pb.Snapshot) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_pb.Snapshot) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse) => void): grpc.ClientUnaryCall;
}
