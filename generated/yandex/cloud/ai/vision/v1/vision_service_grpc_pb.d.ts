// package: yandex.cloud.ai.vision.v1
// file: yandex/cloud/ai/vision/v1/vision_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_ai_vision_v1_vision_service_pb from "../../../../../yandex/cloud/ai/vision/v1/vision_service_pb";
import * as yandex_cloud_ai_vision_v1_text_detection_pb from "../../../../../yandex/cloud/ai/vision/v1/text_detection_pb";
import * as yandex_cloud_ai_vision_v1_classification_pb from "../../../../../yandex/cloud/ai/vision/v1/classification_pb";
import * as yandex_cloud_ai_vision_v1_face_detection_pb from "../../../../../yandex/cloud/ai/vision/v1/face_detection_pb";
import * as yandex_cloud_ai_vision_v1_image_copy_search_pb from "../../../../../yandex/cloud/ai/vision/v1/image_copy_search_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

interface IVisionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    batchAnalyze: IVisionServiceService_IBatchAnalyze;
}

interface IVisionServiceService_IBatchAnalyze extends grpc.MethodDefinition<yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse> {
    path: "/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse>;
}

export const VisionServiceService: IVisionServiceService;

export interface IVisionServiceServer extends grpc.UntypedServiceImplementation {
    batchAnalyze: grpc.handleUnaryCall<yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse>;
}

export interface IVisionServiceClient {
    batchAnalyze(request: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse) => void): grpc.ClientUnaryCall;
    batchAnalyze(request: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse) => void): grpc.ClientUnaryCall;
    batchAnalyze(request: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse) => void): grpc.ClientUnaryCall;
}

export class VisionServiceClient extends grpc.Client implements IVisionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public batchAnalyze(request: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse) => void): grpc.ClientUnaryCall;
    public batchAnalyze(request: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse) => void): grpc.ClientUnaryCall;
    public batchAnalyze(request: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse) => void): grpc.ClientUnaryCall;
}
