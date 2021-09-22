// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/device_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iot_devices_v1_device_service_pb from "../../../../../yandex/cloud/iot/devices/v1/device_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_iot_devices_v1_device_pb from "../../../../../yandex/cloud/iot/devices/v1/device_pb";

interface IDeviceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDeviceServiceService_IGet;
    getByName: IDeviceServiceService_IGetByName;
    list: IDeviceServiceService_IList;
    create: IDeviceServiceService_ICreate;
    update: IDeviceServiceService_IUpdate;
    delete: IDeviceServiceService_IDelete;
    listCertificates: IDeviceServiceService_IListCertificates;
    addCertificate: IDeviceServiceService_IAddCertificate;
    deleteCertificate: IDeviceServiceService_IDeleteCertificate;
    listPasswords: IDeviceServiceService_IListPasswords;
    addPassword: IDeviceServiceService_IAddPassword;
    deletePassword: IDeviceServiceService_IDeletePassword;
    listOperations: IDeviceServiceService_IListOperations;
}

interface IDeviceServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, yandex_cloud_iot_devices_v1_device_pb.Device> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_pb.Device>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_pb.Device>;
}
interface IDeviceServiceService_IGetByName extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, yandex_cloud_iot_devices_v1_device_pb.Device> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/GetByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_pb.Device>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_pb.Device>;
}
interface IDeviceServiceService_IList extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse>;
}
interface IDeviceServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDeviceServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDeviceServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDeviceServiceService_IListCertificates extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse>;
}
interface IDeviceServiceService_IAddCertificate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDeviceServiceService_IDeleteCertificate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDeviceServiceService_IListPasswords extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse>;
}
interface IDeviceServiceService_IAddPassword extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/AddPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDeviceServiceService_IDeletePassword extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDeviceServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse> {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse>;
}

export const DeviceServiceService: IDeviceServiceService;

export interface IDeviceServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, yandex_cloud_iot_devices_v1_device_pb.Device>;
    getByName: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, yandex_cloud_iot_devices_v1_device_pb.Device>;
    list: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, yandex_cloud_operation_operation_pb.Operation>;
    listCertificates: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse>;
    addCertificate: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    deleteCertificate: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    listPasswords: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse>;
    addPassword: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, yandex_cloud_operation_operation_pb.Operation>;
    deletePassword: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse>;
}

export interface IDeviceServiceClient {
    get(request: yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listCertificates(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse) => void): grpc.ClientUnaryCall;
    listCertificates(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse) => void): grpc.ClientUnaryCall;
    listCertificates(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse) => void): grpc.ClientUnaryCall;
    addCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listPasswords(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse) => void): grpc.ClientUnaryCall;
    listPasswords(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse) => void): grpc.ClientUnaryCall;
    listPasswords(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse) => void): grpc.ClientUnaryCall;
    addPassword(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addPassword(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addPassword(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deletePassword(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deletePassword(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deletePassword(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class DeviceServiceClient extends grpc.Client implements IDeviceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_pb.Device) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listCertificates(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse) => void): grpc.ClientUnaryCall;
    public listCertificates(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse) => void): grpc.ClientUnaryCall;
    public listCertificates(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse) => void): grpc.ClientUnaryCall;
    public addCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCertificate(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listPasswords(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse) => void): grpc.ClientUnaryCall;
    public listPasswords(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse) => void): grpc.ClientUnaryCall;
    public listPasswords(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse) => void): grpc.ClientUnaryCall;
    public addPassword(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addPassword(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addPassword(request: yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deletePassword(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deletePassword(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deletePassword(request: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse) => void): grpc.ClientUnaryCall;
}
