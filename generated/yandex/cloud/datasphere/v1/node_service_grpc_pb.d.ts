// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/node_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_datasphere_v1_node_service_pb from "../../../../yandex/cloud/datasphere/v1/node_service_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface INodeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    execute: INodeServiceService_IExecute;
}

interface INodeServiceService_IExecute extends grpc.MethodDefinition<yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse> {
    path: "/yandex.cloud.datasphere.v1.NodeService/Execute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse>;
}

export const NodeServiceService: INodeServiceService;

export interface INodeServiceServer {
    execute: grpc.handleUnaryCall<yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse>;
}

export interface INodeServiceClient {
    execute(request: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse) => void): grpc.ClientUnaryCall;
    execute(request: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse) => void): grpc.ClientUnaryCall;
    execute(request: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse) => void): grpc.ClientUnaryCall;
}

export class NodeServiceClient extends grpc.Client implements INodeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public execute(request: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse) => void): grpc.ClientUnaryCall;
    public execute(request: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse) => void): grpc.ClientUnaryCall;
    public execute(request: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse) => void): grpc.ClientUnaryCall;
}
