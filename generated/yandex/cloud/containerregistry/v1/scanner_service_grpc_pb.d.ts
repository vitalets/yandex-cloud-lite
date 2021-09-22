// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/scanner_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_containerregistry_v1_scanner_service_pb from "../../../../yandex/cloud/containerregistry/v1/scanner_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_containerregistry_v1_scanner_pb from "../../../../yandex/cloud/containerregistry/v1/scanner_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IScannerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    scan: IScannerServiceService_IScan;
    get: IScannerServiceService_IGet;
    getLast: IScannerServiceService_IGetLast;
    list: IScannerServiceService_IList;
    listVulnerabilities: IScannerServiceService_IListVulnerabilities;
}

interface IScannerServiceService_IScan extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IScannerServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, yandex_cloud_containerregistry_v1_scanner_pb.ScanResult> {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>;
}
interface IScannerServiceService_IGetLast extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, yandex_cloud_containerregistry_v1_scanner_pb.ScanResult> {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/GetLast";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>;
}
interface IScannerServiceService_IList extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse> {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse>;
}
interface IScannerServiceService_IListVulnerabilities extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse> {
    path: "/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse>;
}

export const ScannerServiceService: IScannerServiceService;

export interface IScannerServiceServer {
    scan: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, yandex_cloud_operation_operation_pb.Operation>;
    get: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>;
    getLast: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>;
    list: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse>;
    listVulnerabilities: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse>;
}

export interface IScannerServiceClient {
    scan(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scan(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    scan(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    getLast(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    getLast(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    getLast(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse) => void): grpc.ClientUnaryCall;
    listVulnerabilities(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse) => void): grpc.ClientUnaryCall;
    listVulnerabilities(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse) => void): grpc.ClientUnaryCall;
    listVulnerabilities(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse) => void): grpc.ClientUnaryCall;
}

export class ScannerServiceClient extends grpc.Client implements IScannerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public scan(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scan(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public scan(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    public getLast(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    public getLast(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    public getLast(request: yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse) => void): grpc.ClientUnaryCall;
    public listVulnerabilities(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse) => void): grpc.ClientUnaryCall;
    public listVulnerabilities(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse) => void): grpc.ClientUnaryCall;
    public listVulnerabilities(request: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse) => void): grpc.ClientUnaryCall;
}
