// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/registry_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_iot_devices_v1_registry_service_pb from "../../../../../yandex/cloud/iot/devices/v1/registry_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_iot_devices_v1_registry_pb from "../../../../../yandex/cloud/iot/devices/v1/registry_pb";

interface IRegistryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IRegistryServiceService_IGet;
    getByName: IRegistryServiceService_IGetByName;
    list: IRegistryServiceService_IList;
    create: IRegistryServiceService_ICreate;
    update: IRegistryServiceService_IUpdate;
    delete: IRegistryServiceService_IDelete;
    listCertificates: IRegistryServiceService_IListCertificates;
    addCertificate: IRegistryServiceService_IAddCertificate;
    deleteCertificate: IRegistryServiceService_IDeleteCertificate;
    listPasswords: IRegistryServiceService_IListPasswords;
    addPassword: IRegistryServiceService_IAddPassword;
    deletePassword: IRegistryServiceService_IDeletePassword;
    listDeviceTopicAliases: IRegistryServiceService_IListDeviceTopicAliases;
    listOperations: IRegistryServiceService_IListOperations;
}

interface IRegistryServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, yandex_cloud_iot_devices_v1_registry_pb.Registry> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_pb.Registry>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_pb.Registry>;
}
interface IRegistryServiceService_IGetByName extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, yandex_cloud_iot_devices_v1_registry_pb.Registry> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/GetByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_pb.Registry>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_pb.Registry>;
}
interface IRegistryServiceService_IList extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse>;
}
interface IRegistryServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IListCertificates extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse>;
}
interface IRegistryServiceService_IAddCertificate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IDeleteCertificate extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IListPasswords extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse>;
}
interface IRegistryServiceService_IAddPassword extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/AddPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IDeletePassword extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRegistryServiceService_IListDeviceTopicAliases extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse>;
}
interface IRegistryServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse> {
    path: "/yandex.cloud.iot.devices.v1.RegistryService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse>;
}

export const RegistryServiceService: IRegistryServiceService;

export interface IRegistryServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, yandex_cloud_iot_devices_v1_registry_pb.Registry>;
    getByName: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, yandex_cloud_iot_devices_v1_registry_pb.Registry>;
    list: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, yandex_cloud_operation_operation_pb.Operation>;
    listCertificates: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse>;
    addCertificate: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    deleteCertificate: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    listPasswords: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse>;
    addPassword: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, yandex_cloud_operation_operation_pb.Operation>;
    deletePassword: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, yandex_cloud_operation_operation_pb.Operation>;
    listDeviceTopicAliases: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse>;
}

export interface IRegistryServiceClient {
    get(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listCertificates(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse) => void): grpc.ClientUnaryCall;
    listCertificates(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse) => void): grpc.ClientUnaryCall;
    listCertificates(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse) => void): grpc.ClientUnaryCall;
    addCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listPasswords(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse) => void): grpc.ClientUnaryCall;
    listPasswords(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse) => void): grpc.ClientUnaryCall;
    listPasswords(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse) => void): grpc.ClientUnaryCall;
    addPassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addPassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addPassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deletePassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deletePassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deletePassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listDeviceTopicAliases(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse) => void): grpc.ClientUnaryCall;
    listDeviceTopicAliases(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse) => void): grpc.ClientUnaryCall;
    listDeviceTopicAliases(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class RegistryServiceClient extends grpc.Client implements IRegistryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_pb.Registry) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listCertificates(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse) => void): grpc.ClientUnaryCall;
    public listCertificates(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse) => void): grpc.ClientUnaryCall;
    public listCertificates(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse) => void): grpc.ClientUnaryCall;
    public addCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteCertificate(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listPasswords(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse) => void): grpc.ClientUnaryCall;
    public listPasswords(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse) => void): grpc.ClientUnaryCall;
    public listPasswords(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse) => void): grpc.ClientUnaryCall;
    public addPassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addPassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addPassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deletePassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deletePassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deletePassword(request: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listDeviceTopicAliases(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse) => void): grpc.ClientUnaryCall;
    public listDeviceTopicAliases(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse) => void): grpc.ClientUnaryCall;
    public listDeviceTopicAliases(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse) => void): grpc.ClientUnaryCall;
}
