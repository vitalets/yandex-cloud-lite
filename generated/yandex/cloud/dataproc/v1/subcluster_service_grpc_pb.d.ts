// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/subcluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_dataproc_v1_subcluster_service_pb from "../../../../yandex/cloud/dataproc/v1/subcluster_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_dataproc_v1_common_pb from "../../../../yandex/cloud/dataproc/v1/common_pb";
import * as yandex_cloud_dataproc_v1_subcluster_pb from "../../../../yandex/cloud/dataproc/v1/subcluster_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";

interface ISubclusterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ISubclusterServiceService_IGet;
    list: ISubclusterServiceService_IList;
    create: ISubclusterServiceService_ICreate;
    update: ISubclusterServiceService_IUpdate;
    delete: ISubclusterServiceService_IDelete;
}

interface ISubclusterServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, yandex_cloud_dataproc_v1_subcluster_pb.Subcluster> {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_v1_subcluster_pb.Subcluster>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_subcluster_pb.Subcluster>;
}
interface ISubclusterServiceService_IList extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse> {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse>;
}
interface ISubclusterServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISubclusterServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISubclusterServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const SubclusterServiceService: ISubclusterServiceService;

export interface ISubclusterServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, yandex_cloud_dataproc_v1_subcluster_pb.Subcluster>;
    list: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ISubclusterServiceClient {
    get(request: yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class SubclusterServiceClient extends grpc.Client implements ISubclusterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
