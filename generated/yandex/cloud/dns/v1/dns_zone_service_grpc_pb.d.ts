// package: yandex.cloud.dns.v1
// file: yandex/cloud/dns/v1/dns_zone_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_dns_v1_dns_zone_service_pb from "../../../../yandex/cloud/dns/v1/dns_zone_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_dns_v1_dns_zone_pb from "../../../../yandex/cloud/dns/v1/dns_zone_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IDnsZoneServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDnsZoneServiceService_IGet;
    list: IDnsZoneServiceService_IList;
    create: IDnsZoneServiceService_ICreate;
    update: IDnsZoneServiceService_IUpdate;
    delete: IDnsZoneServiceService_IDelete;
    getRecordSet: IDnsZoneServiceService_IGetRecordSet;
    listRecordSets: IDnsZoneServiceService_IListRecordSets;
    updateRecordSets: IDnsZoneServiceService_IUpdateRecordSets;
    upsertRecordSets: IDnsZoneServiceService_IUpsertRecordSets;
    listOperations: IDnsZoneServiceService_IListOperations;
    listAccessBindings: IDnsZoneServiceService_IListAccessBindings;
    setAccessBindings: IDnsZoneServiceService_ISetAccessBindings;
    updateAccessBindings: IDnsZoneServiceService_IUpdateAccessBindings;
}

interface IDnsZoneServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, yandex_cloud_dns_v1_dns_zone_pb.DnsZone> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_pb.DnsZone>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_pb.DnsZone>;
}
interface IDnsZoneServiceService_IList extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse>;
}
interface IDnsZoneServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDnsZoneServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDnsZoneServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDnsZoneServiceService_IGetRecordSet extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, yandex_cloud_dns_v1_dns_zone_pb.RecordSet> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
}
interface IDnsZoneServiceService_IListRecordSets extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse>;
}
interface IDnsZoneServiceService_IUpdateRecordSets extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDnsZoneServiceService_IUpsertRecordSets extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDnsZoneServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse>;
}
interface IDnsZoneServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IDnsZoneServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDnsZoneServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const DnsZoneServiceService: IDnsZoneServiceService;

export interface IDnsZoneServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, yandex_cloud_dns_v1_dns_zone_pb.DnsZone>;
    list: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, yandex_cloud_operation_operation_pb.Operation>;
    getRecordSet: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    listRecordSets: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse>;
    updateRecordSets: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, yandex_cloud_operation_operation_pb.Operation>;
    upsertRecordSets: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IDnsZoneServiceClient {
    get(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.DnsZone) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.DnsZone) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.DnsZone) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getRecordSet(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.RecordSet) => void): grpc.ClientUnaryCall;
    getRecordSet(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.RecordSet) => void): grpc.ClientUnaryCall;
    getRecordSet(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.RecordSet) => void): grpc.ClientUnaryCall;
    listRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse) => void): grpc.ClientUnaryCall;
    listRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse) => void): grpc.ClientUnaryCall;
    listRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse) => void): grpc.ClientUnaryCall;
    updateRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    upsertRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    upsertRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    upsertRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class DnsZoneServiceClient extends grpc.Client implements IDnsZoneServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.DnsZone) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.DnsZone) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.DnsZone) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getRecordSet(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.RecordSet) => void): grpc.ClientUnaryCall;
    public getRecordSet(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.RecordSet) => void): grpc.ClientUnaryCall;
    public getRecordSet(request: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_pb.RecordSet) => void): grpc.ClientUnaryCall;
    public listRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse) => void): grpc.ClientUnaryCall;
    public listRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse) => void): grpc.ClientUnaryCall;
    public listRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse) => void): grpc.ClientUnaryCall;
    public updateRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public upsertRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public upsertRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public upsertRecordSets(request: yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse) => void): grpc.ClientUnaryCall;
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
