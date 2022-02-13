// package: yandex.cloud.datatransfer.v1
// file: yandex/cloud/datatransfer/v1/transfer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_datatransfer_v1_transfer_service_pb from "../../../../yandex/cloud/datatransfer/v1/transfer_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_datatransfer_v1_transfer_pb from "../../../../yandex/cloud/datatransfer/v1/transfer_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";

interface ITransferServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ITransferServiceService_ICreate;
    update: ITransferServiceService_IUpdate;
    delete: ITransferServiceService_IDelete;
    list: ITransferServiceService_IList;
    get: ITransferServiceService_IGet;
    deactivate: ITransferServiceService_IDeactivate;
    activate: ITransferServiceService_IActivate;
}

interface ITransferServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITransferServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITransferServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITransferServiceService_IList extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse> {
    path: "/yandex.cloud.datatransfer.v1.TransferService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse>;
}
interface ITransferServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, yandex_cloud_datatransfer_v1_transfer_pb.Transfer> {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_pb.Transfer>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_pb.Transfer>;
}
interface ITransferServiceService_IDeactivate extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Deactivate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITransferServiceService_IActivate extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Activate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const TransferServiceService: ITransferServiceService;

export interface ITransferServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, yandex_cloud_operation_operation_pb.Operation>;
    list: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse>;
    get: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, yandex_cloud_datatransfer_v1_transfer_pb.Transfer>;
    deactivate: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, yandex_cloud_operation_operation_pb.Operation>;
    activate: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ITransferServiceClient {
    create(request: yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_pb.Transfer) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_pb.Transfer) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_pb.Transfer) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class TransferServiceClient extends grpc.Client implements ITransferServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_pb.Transfer) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_pb.Transfer) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_transfer_pb.Transfer) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
