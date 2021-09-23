// package: yandex.cloud.serverless.triggers.v1
// file: yandex/cloud/serverless/triggers/v1/trigger_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_serverless_triggers_v1_trigger_service_pb from "../../../../../yandex/cloud/serverless/triggers/v1/trigger_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_serverless_triggers_v1_trigger_pb from "../../../../../yandex/cloud/serverless/triggers/v1/trigger_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface ITriggerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ITriggerServiceService_IGet;
    list: ITriggerServiceService_IList;
    create: ITriggerServiceService_ICreate;
    update: ITriggerServiceService_IUpdate;
    delete: ITriggerServiceService_IDelete;
    pause: ITriggerServiceService_IPause;
    resume: ITriggerServiceService_IResume;
    listOperations: ITriggerServiceService_IListOperations;
}

interface ITriggerServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger>;
}
interface ITriggerServiceService_IList extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse>;
}
interface ITriggerServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITriggerServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITriggerServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITriggerServiceService_IPause extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Pause";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITriggerServiceService_IResume extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Resume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITriggerServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse> {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse>;
}

export const TriggerServiceService: ITriggerServiceService;

export interface ITriggerServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger>;
    list: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, yandex_cloud_operation_operation_pb.Operation>;
    pause: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, yandex_cloud_operation_operation_pb.Operation>;
    resume: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse>;
}

export interface ITriggerServiceClient {
    get(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pause(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pause(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pause(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resume(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resume(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resume(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class TriggerServiceClient extends grpc.Client implements ITriggerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pause(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pause(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pause(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resume(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resume(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resume(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse) => void): grpc.ClientUnaryCall;
}
