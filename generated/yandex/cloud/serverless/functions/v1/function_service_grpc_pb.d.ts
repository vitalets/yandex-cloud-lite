// package: yandex.cloud.serverless.functions.v1
// file: yandex/cloud/serverless/functions/v1/function_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_serverless_functions_v1_function_service_pb from "../../../../../yandex/cloud/serverless/functions/v1/function_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_functions_v1_function_pb from "../../../../../yandex/cloud/serverless/functions/v1/function_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IFunctionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IFunctionServiceService_IGet;
    list: IFunctionServiceService_IList;
    create: IFunctionServiceService_ICreate;
    update: IFunctionServiceService_IUpdate;
    delete: IFunctionServiceService_IDelete;
    getVersion: IFunctionServiceService_IGetVersion;
    getVersionByTag: IFunctionServiceService_IGetVersionByTag;
    listVersions: IFunctionServiceService_IListVersions;
    setTag: IFunctionServiceService_ISetTag;
    removeTag: IFunctionServiceService_IRemoveTag;
    listTagHistory: IFunctionServiceService_IListTagHistory;
    createVersion: IFunctionServiceService_ICreateVersion;
    listRuntimes: IFunctionServiceService_IListRuntimes;
    listOperations: IFunctionServiceService_IListOperations;
    listAccessBindings: IFunctionServiceService_IListAccessBindings;
    setAccessBindings: IFunctionServiceService_ISetAccessBindings;
    updateAccessBindings: IFunctionServiceService_IUpdateAccessBindings;
    listScalingPolicies: IFunctionServiceService_IListScalingPolicies;
    setScalingPolicy: IFunctionServiceService_ISetScalingPolicy;
    removeScalingPolicy: IFunctionServiceService_IRemoveScalingPolicy;
}

interface IFunctionServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, yandex_cloud_serverless_functions_v1_function_pb.Function> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_pb.Function>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_pb.Function>;
}
interface IFunctionServiceService_IList extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse>;
}
interface IFunctionServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IGetVersion extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, yandex_cloud_serverless_functions_v1_function_pb.Version> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_pb.Version>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_pb.Version>;
}
interface IFunctionServiceService_IGetVersionByTag extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, yandex_cloud_serverless_functions_v1_function_pb.Version> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_pb.Version>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_pb.Version>;
}
interface IFunctionServiceService_IListVersions extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse>;
}
interface IFunctionServiceService_ISetTag extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IRemoveTag extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IListTagHistory extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse>;
}
interface IFunctionServiceService_ICreateVersion extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IListRuntimes extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse>;
}
interface IFunctionServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse>;
}
interface IFunctionServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IFunctionServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IListScalingPolicies extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse>;
}
interface IFunctionServiceService_ISetScalingPolicy extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFunctionServiceService_IRemoveScalingPolicy extends grpc.MethodDefinition<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const FunctionServiceService: IFunctionServiceService;

export interface IFunctionServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, yandex_cloud_serverless_functions_v1_function_pb.Function>;
    list: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, yandex_cloud_operation_operation_pb.Operation>;
    getVersion: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, yandex_cloud_serverless_functions_v1_function_pb.Version>;
    getVersionByTag: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, yandex_cloud_serverless_functions_v1_function_pb.Version>;
    listVersions: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse>;
    setTag: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeTag: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, yandex_cloud_operation_operation_pb.Operation>;
    listTagHistory: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse>;
    createVersion: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, yandex_cloud_operation_operation_pb.Operation>;
    listRuntimes: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    listScalingPolicies: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse>;
    setScalingPolicy: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeScalingPolicy: grpc.handleUnaryCall<yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IFunctionServiceClient {
    get(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Function) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Function) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Function) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    getVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    getVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    getVersionByTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    getVersionByTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    getVersionByTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse) => void): grpc.ClientUnaryCall;
    setTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listTagHistory(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse) => void): grpc.ClientUnaryCall;
    listTagHistory(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse) => void): grpc.ClientUnaryCall;
    listTagHistory(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse) => void): grpc.ClientUnaryCall;
    createVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    createVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    createVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listRuntimes(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse) => void): grpc.ClientUnaryCall;
    listRuntimes(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse) => void): grpc.ClientUnaryCall;
    listRuntimes(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listScalingPolicies(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse) => void): grpc.ClientUnaryCall;
    listScalingPolicies(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse) => void): grpc.ClientUnaryCall;
    listScalingPolicies(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse) => void): grpc.ClientUnaryCall;
    setScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class FunctionServiceClient extends grpc.Client implements IFunctionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Function) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Function) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Function) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersionByTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersionByTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersionByTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_pb.Version) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse) => void): grpc.ClientUnaryCall;
    public setTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeTag(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listTagHistory(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse) => void): grpc.ClientUnaryCall;
    public listTagHistory(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse) => void): grpc.ClientUnaryCall;
    public listTagHistory(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse) => void): grpc.ClientUnaryCall;
    public createVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public createVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public createVersion(request: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listRuntimes(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse) => void): grpc.ClientUnaryCall;
    public listRuntimes(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse) => void): grpc.ClientUnaryCall;
    public listRuntimes(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listScalingPolicies(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse) => void): grpc.ClientUnaryCall;
    public listScalingPolicies(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse) => void): grpc.ClientUnaryCall;
    public listScalingPolicies(request: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse) => void): grpc.ClientUnaryCall;
    public setScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeScalingPolicy(request: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
