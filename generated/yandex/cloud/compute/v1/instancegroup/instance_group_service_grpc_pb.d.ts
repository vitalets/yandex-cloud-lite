// package: yandex.cloud.compute.v1.instancegroup
// file: yandex/cloud/compute/v1/instancegroup/instance_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_instancegroup_instance_group_service_pb from "../../../../../yandex/cloud/compute/v1/instancegroup/instance_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_instancegroup_instance_group_pb from "../../../../../yandex/cloud/compute/v1/instancegroup/instance_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IInstanceGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IInstanceGroupServiceService_IGet;
    list: IInstanceGroupServiceService_IList;
    create: IInstanceGroupServiceService_ICreate;
    createFromYaml: IInstanceGroupServiceService_ICreateFromYaml;
    update: IInstanceGroupServiceService_IUpdate;
    updateFromYaml: IInstanceGroupServiceService_IUpdateFromYaml;
    stop: IInstanceGroupServiceService_IStop;
    start: IInstanceGroupServiceService_IStart;
    delete: IInstanceGroupServiceService_IDelete;
    listInstances: IInstanceGroupServiceService_IListInstances;
    deleteInstances: IInstanceGroupServiceService_IDeleteInstances;
    stopInstances: IInstanceGroupServiceService_IStopInstances;
    listOperations: IInstanceGroupServiceService_IListOperations;
    listLogRecords: IInstanceGroupServiceService_IListLogRecords;
    listAccessBindings: IInstanceGroupServiceService_IListAccessBindings;
    setAccessBindings: IInstanceGroupServiceService_ISetAccessBindings;
    updateAccessBindings: IInstanceGroupServiceService_IUpdateAccessBindings;
    resumeProcesses: IInstanceGroupServiceService_IResumeProcesses;
    pauseProcesses: IInstanceGroupServiceService_IPauseProcesses;
}

interface IInstanceGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup>;
}
interface IInstanceGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse>;
}
interface IInstanceGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_ICreateFromYaml extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IUpdateFromYaml extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IListInstances extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse>;
}
interface IInstanceGroupServiceService_IDeleteInstances extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IStopInstances extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse>;
}
interface IInstanceGroupServiceService_IListLogRecords extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse>;
}
interface IInstanceGroupServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IInstanceGroupServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IResumeProcesses extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceGroupServiceService_IPauseProcesses extends grpc.MethodDefinition<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const InstanceGroupServiceService: IInstanceGroupServiceService;

export interface IInstanceGroupServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    createFromYaml: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateFromYaml: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, yandex_cloud_operation_operation_pb.Operation>;
    stop: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    listInstances: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse>;
    deleteInstances: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, yandex_cloud_operation_operation_pb.Operation>;
    stopInstances: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse>;
    listLogRecords: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    resumeProcesses: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, yandex_cloud_operation_operation_pb.Operation>;
    pauseProcesses: grpc.handleUnaryCall<yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IInstanceGroupServiceClient {
    get(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    createFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    createFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    createFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    deleteInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stopInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stopInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stopInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listLogRecords(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse) => void): grpc.ClientUnaryCall;
    listLogRecords(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse) => void): grpc.ClientUnaryCall;
    listLogRecords(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resumeProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resumeProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    resumeProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pauseProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pauseProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    pauseProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class InstanceGroupServiceClient extends grpc.Client implements IInstanceGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public createFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public createFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public createFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateFromYaml(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public deleteInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stopInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stopInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stopInstances(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listLogRecords(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse) => void): grpc.ClientUnaryCall;
    public listLogRecords(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse) => void): grpc.ClientUnaryCall;
    public listLogRecords(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resumeProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resumeProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public resumeProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pauseProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pauseProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public pauseProcesses(request: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
