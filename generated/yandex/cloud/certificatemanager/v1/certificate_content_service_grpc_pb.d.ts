// package: yandex.cloud.certificatemanager.v1
// file: yandex/cloud/certificatemanager/v1/certificate_content_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_certificatemanager_v1_certificate_content_service_pb from "../../../../yandex/cloud/certificatemanager/v1/certificate_content_service_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ICertificateContentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ICertificateContentServiceService_IGet;
}

interface ICertificateContentServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse> {
    path: "/yandex.cloud.certificatemanager.v1.CertificateContentService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse>;
}

export const CertificateContentServiceService: ICertificateContentServiceService;

export interface ICertificateContentServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse>;
}

export interface ICertificateContentServiceClient {
    get(request: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse) => void): grpc.ClientUnaryCall;
}

export class CertificateContentServiceClient extends grpc.Client implements ICertificateContentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse) => void): grpc.ClientUnaryCall;
}
