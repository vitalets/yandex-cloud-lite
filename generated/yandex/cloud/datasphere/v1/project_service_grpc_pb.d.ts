// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/project_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_datasphere_v1_project_service_pb from "../../../../yandex/cloud/datasphere/v1/project_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_datasphere_v1_project_pb from "../../../../yandex/cloud/datasphere/v1/project_pb";

interface IProjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IProjectServiceService_ICreate;
    update: IProjectServiceService_IUpdate;
    delete: IProjectServiceService_IDelete;
    open: IProjectServiceService_IOpen;
    get: IProjectServiceService_IGet;
    list: IProjectServiceService_IList;
    getUnitBalance: IProjectServiceService_IGetUnitBalance;
    setUnitBalance: IProjectServiceService_ISetUnitBalance;
    execute: IProjectServiceService_IExecute;
    getCellOutputs: IProjectServiceService_IGetCellOutputs;
    getStateVariables: IProjectServiceService_IGetStateVariables;
}

interface IProjectServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProjectServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProjectServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProjectServiceService_IOpen extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Open";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProjectServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, yandex_cloud_datasphere_v1_project_pb.Project> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_pb.Project>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_pb.Project>;
}
interface IProjectServiceService_IList extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse>;
}
interface IProjectServiceService_IGetUnitBalance extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse>;
}
interface IProjectServiceService_ISetUnitBalance extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, google_protobuf_empty_pb.Empty> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IProjectServiceService_IExecute extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/Execute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProjectServiceService_IGetCellOutputs extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse>;
}
interface IProjectServiceService_IGetStateVariables extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse> {
    path: "/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse>;
}

export const ProjectServiceService: IProjectServiceService;

export interface IProjectServiceServer {
    create: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, yandex_cloud_operation_operation_pb.Operation>;
    open: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, yandex_cloud_operation_operation_pb.Operation>;
    get: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, yandex_cloud_datasphere_v1_project_pb.Project>;
    list: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse>;
    getUnitBalance: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse>;
    setUnitBalance: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, google_protobuf_empty_pb.Empty>;
    execute: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, yandex_cloud_operation_operation_pb.Operation>;
    getCellOutputs: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse>;
    getStateVariables: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse>;
}

export interface IProjectServiceClient {
    create(request: yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    open(request: yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    open(request: yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    open(request: yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_pb.Project) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_pb.Project) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_pb.Project) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse) => void): grpc.ClientUnaryCall;
    getUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse) => void): grpc.ClientUnaryCall;
    getUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse) => void): grpc.ClientUnaryCall;
    getUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse) => void): grpc.ClientUnaryCall;
    setUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    execute(request: yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    execute(request: yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    execute(request: yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getCellOutputs(request: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse) => void): grpc.ClientUnaryCall;
    getCellOutputs(request: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse) => void): grpc.ClientUnaryCall;
    getCellOutputs(request: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse) => void): grpc.ClientUnaryCall;
    getStateVariables(request: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse) => void): grpc.ClientUnaryCall;
    getStateVariables(request: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse) => void): grpc.ClientUnaryCall;
    getStateVariables(request: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse) => void): grpc.ClientUnaryCall;
}

export class ProjectServiceClient extends grpc.Client implements IProjectServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public open(request: yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public open(request: yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public open(request: yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_pb.Project) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_pb.Project) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_pb.Project) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse) => void): grpc.ClientUnaryCall;
    public getUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse) => void): grpc.ClientUnaryCall;
    public getUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse) => void): grpc.ClientUnaryCall;
    public getUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse) => void): grpc.ClientUnaryCall;
    public setUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setUnitBalance(request: yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public execute(request: yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public execute(request: yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public execute(request: yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getCellOutputs(request: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse) => void): grpc.ClientUnaryCall;
    public getCellOutputs(request: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse) => void): grpc.ClientUnaryCall;
    public getCellOutputs(request: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse) => void): grpc.ClientUnaryCall;
    public getStateVariables(request: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse) => void): grpc.ClientUnaryCall;
    public getStateVariables(request: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse) => void): grpc.ClientUnaryCall;
    public getStateVariables(request: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse) => void): grpc.ClientUnaryCall;
}
