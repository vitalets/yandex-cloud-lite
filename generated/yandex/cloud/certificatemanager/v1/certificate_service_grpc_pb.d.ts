// package: yandex.cloud.certificatemanager.v1
// file: yandex/cloud/certificatemanager/v1/certificate_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_certificatemanager_v1_certificate_service_pb from "../../../../yandex/cloud/certificatemanager/v1/certificate_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_certificatemanager_v1_certificate_pb from "../../../../yandex/cloud/certificatemanager/v1/certificate_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";

interface ICertificateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ICertificateServiceService_IGet;
    list: ICertificateServiceService_IList;
    create: ICertificateServiceService_ICreate;
    update: ICertificateServiceService_IUpdate;
    delete: ICertificateServiceService_IDelete;
    requestNew: ICertificateServiceService_IRequestNew;
    listOperations: ICertificateServiceService_IListOperations;
    listAccessBindings: ICertificateServiceService_IListAccessBindings;
    setAccessBindings: ICertificateServiceService_ISetAccessBindings;
    updateAccessBindings: ICertificateServiceService_IUpdateAccessBindings;
}

interface ICertificateServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, yandex_cloud_certificatemanager_v1_certificate_pb.Certificate> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_pb.Certificate>;
    responseDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_pb.Certificate>;
}
interface ICertificateServiceService_IList extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse>;
}
interface ICertificateServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICertificateServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICertificateServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICertificateServiceService_IRequestNew extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICertificateServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse>;
}
interface ICertificateServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface ICertificateServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICertificateServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const CertificateServiceService: ICertificateServiceService;

export interface ICertificateServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, yandex_cloud_certificatemanager_v1_certificate_pb.Certificate>;
    list: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    requestNew: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ICertificateServiceClient {
    get(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_pb.Certificate) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_pb.Certificate) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_pb.Certificate) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    requestNew(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    requestNew(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    requestNew(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class CertificateServiceClient extends grpc.Client implements ICertificateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_pb.Certificate) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_pb.Certificate) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_pb.Certificate) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public requestNew(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public requestNew(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public requestNew(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse) => void): grpc.ClientUnaryCall;
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
