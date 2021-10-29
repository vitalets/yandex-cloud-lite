// package: yandex.cloud.serverless.containers.v1
// file: yandex/cloud/serverless/containers/v1/container_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_serverless_containers_v1_container_service_pb from "../../../../../yandex/cloud/serverless/containers/v1/container_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_containers_v1_container_pb from "../../../../../yandex/cloud/serverless/containers/v1/container_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IContainerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IContainerServiceService_IGet;
    list: IContainerServiceService_IList;
    create: IContainerServiceService_ICreate;
    update: IContainerServiceService_IUpdate;
    delete: IContainerServiceService_IDelete;
    deployRevision: IContainerServiceService_IDeployRevision;
    getRevision: IContainerServiceService_IGetRevision;
    listRevisions: IContainerServiceService_IListRevisions;
    listOperations: IContainerServiceService_IListOperations;
    listAccessBindings: IContainerServiceService_IListAccessBindings;
    setAccessBindings: IContainerServiceService_ISetAccessBindings;
    updateAccessBindings: IContainerServiceService_IUpdateAccessBindings;
}

interface IContainerServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, yandex_cloud_serverless_containers_v1_container_pb.Container> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_pb.Container>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_pb.Container>;
}
interface IContainerServiceService_IList extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse>;
}
interface IContainerServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IContainerServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IContainerServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IContainerServiceService_IDeployRevision extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IContainerServiceService_IGetRevision extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, yandex_cloud_serverless_containers_v1_container_pb.Revision> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_pb.Revision>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_pb.Revision>;
}
interface IContainerServiceService_IListRevisions extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse>;
}
interface IContainerServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse>;
}
interface IContainerServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IContainerServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IContainerServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const ContainerServiceService: IContainerServiceService;

export interface IContainerServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, yandex_cloud_serverless_containers_v1_container_pb.Container>;
    list: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, yandex_cloud_operation_operation_pb.Operation>;
    deployRevision: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, yandex_cloud_operation_operation_pb.Operation>;
    getRevision: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, yandex_cloud_serverless_containers_v1_container_pb.Revision>;
    listRevisions: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IContainerServiceClient {
    get(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Container) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Container) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Container) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deployRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deployRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deployRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Revision) => void): grpc.ClientUnaryCall;
    getRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Revision) => void): grpc.ClientUnaryCall;
    getRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Revision) => void): grpc.ClientUnaryCall;
    listRevisions(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse) => void): grpc.ClientUnaryCall;
    listRevisions(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse) => void): grpc.ClientUnaryCall;
    listRevisions(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class ContainerServiceClient extends grpc.Client implements IContainerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Container) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Container) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Container) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deployRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deployRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deployRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Revision) => void): grpc.ClientUnaryCall;
    public getRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Revision) => void): grpc.ClientUnaryCall;
    public getRevision(request: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_pb.Revision) => void): grpc.ClientUnaryCall;
    public listRevisions(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse) => void): grpc.ClientUnaryCall;
    public listRevisions(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse) => void): grpc.ClientUnaryCall;
    public listRevisions(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse) => void): grpc.ClientUnaryCall;
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
