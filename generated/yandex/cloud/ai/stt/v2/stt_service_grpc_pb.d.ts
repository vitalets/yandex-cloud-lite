// package: yandex.cloud.ai.stt.v2
// file: yandex/cloud/ai/stt/v2/stt_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_ai_stt_v2_stt_service_pb from "../../../../../yandex/cloud/ai/stt/v2/stt_service_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";

interface ISttServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    longRunningRecognize: ISttServiceService_ILongRunningRecognize;
    streamingRecognize: ISttServiceService_IStreamingRecognize;
}

interface ISttServiceService_ILongRunningRecognize extends grpc.MethodDefinition<yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISttServiceService_IStreamingRecognize extends grpc.MethodDefinition<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest, yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse> {
    path: "/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
}

export const SttServiceService: ISttServiceService;

export interface ISttServiceServer {
    longRunningRecognize: grpc.handleUnaryCall<yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, yandex_cloud_operation_operation_pb.Operation>;
    streamingRecognize: grpc.handleBidiStreamingCall<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest, yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
}

export interface ISttServiceClient {
    longRunningRecognize(request: yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    longRunningRecognize(request: yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    longRunningRecognize(request: yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    streamingRecognize(): grpc.ClientDuplexStream<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest, yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
    streamingRecognize(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest, yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
    streamingRecognize(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest, yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
}

export class SttServiceClient extends grpc.Client implements ISttServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public longRunningRecognize(request: yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public longRunningRecognize(request: yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public longRunningRecognize(request: yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public streamingRecognize(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest, yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
    public streamingRecognize(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest, yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse>;
}
