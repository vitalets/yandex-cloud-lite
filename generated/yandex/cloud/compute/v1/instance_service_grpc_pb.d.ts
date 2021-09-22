// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/instance_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_instance_service_pb from "../../../../yandex/cloud/compute/v1/instance_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_disk_pb from "../../../../yandex/cloud/compute/v1/disk_pb";
import * as yandex_cloud_compute_v1_instance_pb from "../../../../yandex/cloud/compute/v1/instance_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IInstanceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IInstanceServiceService_IGet;
    list: IInstanceServiceService_IList;
    create: IInstanceServiceService_ICreate;
    update: IInstanceServiceService_IUpdate;
    delete: IInstanceServiceService_IDelete;
    updateMetadata: IInstanceServiceService_IUpdateMetadata;
    getSerialPortOutput: IInstanceServiceService_IGetSerialPortOutput;
    stop: IInstanceServiceService_IStop;
    start: IInstanceServiceService_IStart;
    restart: IInstanceServiceService_IRestart;
    attachDisk: IInstanceServiceService_IAttachDisk;
    detachDisk: IInstanceServiceService_IDetachDisk;
    attachFilesystem: IInstanceServiceService_IAttachFilesystem;
    detachFilesystem: IInstanceServiceService_IDetachFilesystem;
    addOneToOneNat: IInstanceServiceService_IAddOneToOneNat;
    removeOneToOneNat: IInstanceServiceService_IRemoveOneToOneNat;
    updateNetworkInterface: IInstanceServiceService_IUpdateNetworkInterface;
    listOperations: IInstanceServiceService_IListOperations;
}

interface IInstanceServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, yandex_cloud_compute_v1_instance_pb.Instance> {
    path: "/yandex.cloud.compute.v1.InstanceService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_pb.Instance>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_pb.Instance>;
}
interface IInstanceServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse> {
    path: "/yandex.cloud.compute.v1.InstanceService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse>;
}
interface IInstanceServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IUpdateMetadata extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/UpdateMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IGetSerialPortOutput extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse> {
    path: "/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse>;
}
interface IInstanceServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IRestart extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/Restart";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IAttachDisk extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/AttachDisk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IDetachDisk extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/DetachDisk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IAttachFilesystem extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/AttachFilesystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IDetachFilesystem extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/DetachFilesystem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IAddOneToOneNat extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IRemoveOneToOneNat extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IUpdateNetworkInterface extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IInstanceServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse> {
    path: "/yandex.cloud.compute.v1.InstanceService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse>;
}

export const InstanceServiceService: IInstanceServiceService;

export interface IInstanceServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, yandex_cloud_compute_v1_instance_pb.Instance>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateMetadata: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, yandex_cloud_operation_operation_pb.Operation>;
    getSerialPortOutput: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse>;
    stop: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, yandex_cloud_operation_operation_pb.Operation>;
    restart: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, yandex_cloud_operation_operation_pb.Operation>;
    attachDisk: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, yandex_cloud_operation_operation_pb.Operation>;
    detachDisk: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, yandex_cloud_operation_operation_pb.Operation>;
    attachFilesystem: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, yandex_cloud_operation_operation_pb.Operation>;
    detachFilesystem: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, yandex_cloud_operation_operation_pb.Operation>;
    addOneToOneNat: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeOneToOneNat: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateNetworkInterface: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse>;
}

export interface IInstanceServiceClient {
    get(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_pb.Instance) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_pb.Instance) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_pb.Instance) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateMetadata(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateMetadata(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateMetadata(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getSerialPortOutput(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse) => void): grpc.ClientUnaryCall;
    getSerialPortOutput(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse) => void): grpc.ClientUnaryCall;
    getSerialPortOutput(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restart(request: yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restart(request: yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restart(request: yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachDisk(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachDisk(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachDisk(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachDisk(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachDisk(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachDisk(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateNetworkInterface(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateNetworkInterface(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateNetworkInterface(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class InstanceServiceClient extends grpc.Client implements IInstanceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_pb.Instance) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_pb.Instance) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_pb.Instance) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateMetadata(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateMetadata(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateMetadata(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getSerialPortOutput(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse) => void): grpc.ClientUnaryCall;
    public getSerialPortOutput(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse) => void): grpc.ClientUnaryCall;
    public getSerialPortOutput(request: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restart(request: yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restart(request: yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restart(request: yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachDisk(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachDisk(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachDisk(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachDisk(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachDisk(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachDisk(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachFilesystem(request: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeOneToOneNat(request: yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateNetworkInterface(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateNetworkInterface(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateNetworkInterface(request: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse) => void): grpc.ClientUnaryCall;
}
