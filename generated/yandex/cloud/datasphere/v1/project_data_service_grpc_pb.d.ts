// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/project_data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_datasphere_v1_project_data_service_pb from "../../../../yandex/cloud/datasphere/v1/project_data_service_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IProjectDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadFile: IProjectDataServiceService_IUploadFile;
    downloadFile: IProjectDataServiceService_IDownloadFile;
}

interface IProjectDataServiceService_IUploadFile extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest, yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse> {
    path: "/yandex.cloud.datasphere.v1.ProjectDataService/UploadFile";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse>;
}
interface IProjectDataServiceService_IDownloadFile extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest, yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse> {
    path: "/yandex.cloud.datasphere.v1.ProjectDataService/DownloadFile";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse>;
}

export const ProjectDataServiceService: IProjectDataServiceService;

export interface IProjectDataServiceServer extends grpc.UntypedServiceImplementation {
    uploadFile: grpc.handleClientStreamingCall<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest, yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse>;
    downloadFile: grpc.handleServerStreamingCall<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest, yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse>;
}

export interface IProjectDataServiceClient {
    uploadFile(callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    uploadFile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    uploadFile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    uploadFile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    downloadFile(request: yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse>;
    downloadFile(request: yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse>;
}

export class ProjectDataServiceClient extends grpc.Client implements IProjectDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public uploadFile(callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    public uploadFile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    public uploadFile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    public uploadFile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse) => void): grpc.ClientWritableStream<yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest>;
    public downloadFile(request: yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse>;
    public downloadFile(request: yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse>;
}
